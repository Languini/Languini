const express = require('express')

const authController = require('../controller/auth.controller')
const router = express.Router()

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
