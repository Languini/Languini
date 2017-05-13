const express = require('express'),
  router = express.Router(),
  authController = require('../controllers/auth.controller')

module.exports = router
  .post('/auth/login', authController.login)
  .post('/auth/logout', authController.logout)
