const express = require('express'),
  cors = require('cors'),
  router = express.Router(),
  apiController = require('../controllers/api.controller')

const corsOpts = {
  origin: 'http://languini.herokuapp.com/',
  optionsSuccessStatus: 200
}

module.exports = router
    .get('/friends', cors(corsOpts), apiController.someFunction)
