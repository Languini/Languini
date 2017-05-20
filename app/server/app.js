const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const validator = require('express-validator')
const session = require('express-session')
const passport = require('passport')
const crypto = require('crypto')
const randToken = require('rand-token').generator({
  chars: 'A-Z',
  source: crypto.randomBytes
})
const bodyParser = require('body-parser')
const path = require('path')
const uuidV4 = require('uuid/v4')
const fs = require('fs')
const rfs = require('rotating-file-stream')
const morgan = require('morgan')
const pug = require('pug')
const favicon = require('serve-favicon')
const viewRouter = require('./routes/views.routes')
const apiRouter = require('./routes/api.routes')

const app = express()

app.use(favicon(__dirname + '/favicon.ico'))

const corsOpts = {
  origin: 'http://localhost:5000/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOpts))

app.use(helmet())
app.use(compression())

// morgan (logging library)
const reqLogDir = path.join(__dirname, '../../log')

fs.existsSync(reqLogDir) || fs.mkdirSync(reqLogDir)

const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: reqLogDir
})

morgan.token('id', req => {
  return req.id
})
app.use((req, res, next) => {
  req.id = uuidV4()
  next()
})
app.use(morgan(
    ':id :method :url :status :res[content-length] - :response-time ms :date[web]',
    { stream: accessLogStream },
    { skip: (req, res) => res.statusCode < 400 }
))

// Pug, the view engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'pug')

// parse requests to json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// we can use validator to validate requests from forms server-side
app.use(validator())

// register our static assets
app.use('/static', express.static(path.join(__dirname, '/../static')))

// development debugging view
require('express-debug')(app, {})

// setup in-memory session storage (a no-no, should be using redis)
app.use(session({ secret: randToken.generate(16), saveUninitialized: false, resave: false }))

// register passport settings
app.use(passport.initialize())
app.use(passport.session())

// make user object available to every view
app.use((req, res, next) => {
  res.locals.user = req.user
  next()
})

// register routes
require('./routes/auth.routes')(app, passport)
app.use('/', viewRouter)
app.use('/api', apiRouter)

// resource not found request handler
app.use((req, res) => {
  res.status(404).send('404')
  console.log('404')
})

// export our server for consumption by bin/www
module.exports = app
