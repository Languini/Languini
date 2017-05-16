const express = require('express'),
  helmet = require('helmet'),
  compression = require('compression'),
  validator = require('express-validator'),
  session = require('express-session'),
  crypto = require('crypto'),
  randToken = require('rand-token').generator({
    chars: 'A-Z',
    source: crypto.randomBytes
  }),
  bodyParser = require('body-parser'),
  path = require('path'),
  uuidV4 = require('uuid/v4'),
  fs = require('fs'),
  rfs = require('rotating-file-stream'),
  morgan = require('morgan'),
  pug = require('pug'),
  app = express(),
  { passport } = require('./controllers/auth.controller'),
  authRouter = require('./routes/auth'),
  viewRouter = require('./routes/views'),
  apiRouter = require('./routes/api')

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
    { skip: (req, res) => res.statusCode < 40 }
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

// setup in-memory session storage (a no-no, should be using redis)
app.use(session({ secret: randToken.generate(16), saveUninitialized: false, resave: false }))

// register passport settings
app.use(passport.initialize())
app.use(passport.session())

// register routers
app.use('/api/', apiRouter)
app.use('/', viewRouter)
// resource not found
app.use((req, res) => {
  res.status(404).send('404')
  console.log('404')
})

// export our server for consumption by bin/www
module.exports = app
