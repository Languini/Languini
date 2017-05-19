const express = require('express')
const cors = require('cors')
const apiController = require('../controller/api.controller')

const router = express.Router()

const corsOpts = {
  origin: 'http://languini.herokuapp.com/',
  optionsSuccessStatus: 200
}

module.exports = router
  .get('/translations', cors(corsOpts), apiController.getTrans)
  .post('/translations', apiController.createTrans)
  .get('/answers', apiController.getAns)
  .post('/answers', apiController.createAns)
  .get('/comments', apiController.getComm)
  .post('/comments', apiController.createComm)
  .post('/vote', apiController.voteComment)
