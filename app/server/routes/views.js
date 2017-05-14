const express = require('express'),
  viewsController = require('../controllers/views.controller'),
  router = express.Router()

module.exports = router
    .get('/', viewsController.home)
    .get('/create', viewsController.create)
    .get('/translate', viewsController.translate)
