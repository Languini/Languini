const express = require('express'),
  viewsController = require('../controllers/views.controller'),
  router = express.Router()

module.exports = router
    .get('/', viewsController.home)
    .get('/login', viewsController.getLogin)
    .post('/login', viewsController.postLogin)
    .get('/logout', viewsController.logOut)
    .get('/survey', viewsController.getSurvey)
    .post('/survey', viewsController.postSurvey)
    .get('/community', viewsController.getCommunity)
