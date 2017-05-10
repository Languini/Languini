const express = require('express'),
    helmet = require('helmet'),
    compression = require('compression'),
    validator = require('express-validator'),
    bodyParser = require('body-parser'),
    path = require('path'),
    uuidV4 = require('uuid/v4'),
    fs = require('fs'),
    rfs = require('rotating-file-stream'),
    morgan = require('morgan'),
    pug = require('pug'),
    app = express(),
    apiRouter = require('./routes/api'),
    viewRouter = require('./routes/views');


app.use(helmet());
app.use(compression());

// morgan (logging library)
const reqLogDir = path.join(__dirname, '../../log');

fs.existsSync(reqLogDir) || fs.mkdirSync(reqLogDir);

const accessLogStream = rfs('access.log', {
  interval: '1d',
  path: reqLogDir
});

morgan.token('id', req => {
    return req.id;
});
app.use((req, res, next) => {
  req.id = uuidV4();
  next();
});
app.use(morgan(
    ':id :method :url :status :res[content-length] - :response-time ms :date[web]',
    { stream: accessLogStream },
    { skip: (req, res) => res.statusCode < 40 }
));

// Pug, the view engine
app.engine("handlebars", exprHbs({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, '/views/layouts'),
    partialsDir: path.join(__dirname, '/views/partials')
}));
app.set('views', path.join(__dirname, '/views'));
app.set("view engine", "pug");

// parse requests to json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// we can use validator to validate requests from forms server-side
app.use(validator());

// register our static assets
app.use('/static', express.static(path.join(__dirname, '/../static')));

// register routes
app.use('/api/', apiRouter);
app.use('/', viewRouter);
app.use((req, res) => {
    res.status(404).render('404');
});

// export our server
module.exports = app;
