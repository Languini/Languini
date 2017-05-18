const express = require('express')
const cors = require('cors')
const apiController = require('../controller/api.controller')

const router = express.Router()

const corsOpts = {
  origin: 'http://languini.herokuapp.com/',
  optionsSuccessStatus: 200
}

module.exports = router
    .get('/translations', cors(corsOpts), apiController.someFunction)
    .post('/translations', apiController.createTrans)
