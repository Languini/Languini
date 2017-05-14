require('dotenv').config()

const passport = require('passport'),
  FacebookStrategy = require('passport-facebook').Strategy,
  { User } = require('../models')


passport.use(new FacebookStrategy({
    clientID: process.env.APP_ID,
    clientSecret: process.env.APP_SECRET,
    callbackURL: 'http://localhost:5000/auth/facebook/callback',
    profileFields: ['id','displayName', 'photos', 'emails']
  }, (accessToken, refreshToken, profile, done) => {
    /* should be findOrCreate */
    User
      .create({
        fb_id: profile.id,
        email: profile.emails[0].value,
        name: profile.displayName,
        photo: profile.photos[0].value
      })
  }
))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  done(null, id)
})

exports.passport = passport

exports.auth = (req, res) => {
  // if no token (middleware), validate user creds through facebook
  // create, sign and dispatch token
  // redirect to previous route,
}
