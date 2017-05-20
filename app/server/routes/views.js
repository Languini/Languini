const express = require('express')

const viewsController = require('../controller/views.controller')
const router = express.Router()

module.exports = router
<<<<<<< HEAD:app/server/routes/views.routes.js
  .get('/', viewsController.home)
  .get('/create', viewsController.create)
  .get('/posts/:id', viewsController.translate)
  .post('/vote', viewsController.vote)
=======
    .get('/', viewsController.home)
    // .get('/create', viewsController.logOut)
    // .get('/translate', viewsController.getSurvey)
>>>>>>> master:app/server/routes/views.js
