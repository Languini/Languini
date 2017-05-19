const express = require('express')

const viewsController = require('../controller/views.controller')
const router = express.Router()

module.exports = router
  .get('/', viewsController.home)
  .get('/create', viewsController.create)
  .get('/posts/:id', viewsController.translate)
