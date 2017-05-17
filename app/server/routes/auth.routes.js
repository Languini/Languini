const express = require('express'),
  router = express.Router(),
  authController = require('../controller/auth.controller')

module.exports = (app, passport) => {
  router
    .get('/facebook',
      passport.authenticate(
        'facebook',
        { scope: 'email'})
      )
    .get('/facebook/callback',
      passport.authenticate(
        'facebook',
        { failureRedirect: '/' }
      ),
      authController.loggedIn)
    .get('/logout', authController.logout)

  app.use('/auth', router)
}
