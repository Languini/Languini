const express = require('express')
const cors = require('cors')
const apiController = require('../controller/api.controller')

const router = express.Router()

module.exports = router
<<<<<<< HEAD:app/server/routes/api.routes.js
  .get('/translations', apiController.getTrans)
  .post('/translations', apiController.createTrans)
  .get('/answers', apiController.getAns)
  .post('/answers', apiController.createAns)
  .get('/comments', apiController.getComm)
  .post('/comments', apiController.createComm)
  .post('/vote', apiController.postVote)
=======
    .get('/friends', cors(corsOpts), apiController.someFunction)
>>>>>>> master:app/server/routes/api.js
