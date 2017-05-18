require('dotenv').config()

const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const { User } = require('../models')

module.exports = passport => {
  const facebookOptions = {
    clientID: process.env.APP_ID,
    clientSecret: process.env.APP_SECRET,
    callbackURL: 'http://localhost:5000/auth/facebook/callback',
    profileFields: ['id', 'emails', 'photos', 'displayName']
  }

  const findOrCreate = function (accessToken, refreshToken, profile, cb) {
    User
        .findOrCreate({
          where: { fb_id: profile.id},
          defaults: {
            email: profile.emails[0].value,
            name: profile.displayName,
            photo: profile.photos[0].value
          }
        })
        .spread((user, created) => {
          return cb(null, user)
        })
  }

  const dehydrate = (user, cb) => cb(null, user.id)

  const rehydrate = (id, cb) => {
    User
      .findById(id)
      .then(user => {
        return cb(null, user)
      })
  }

  passport.use(new FacebookStrategy(
    facebookOptions,
    findOrCreate
  ))

  // user gets passed to this function at line 18 above
  // session is created and saved
  // we're only registering the user's id to the session
  passport.serializeUser(dehydrate)

  // when the user returns to the site, this function is called
  // it 'rehydrates' the data we stored in the session via the serializeUser function
  passport.deserializeUser(rehydrate)
}
