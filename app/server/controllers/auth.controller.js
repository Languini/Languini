require('dotenv').config()

const passport = require('passport'),
  Strategy = require('passport-facebook').Strategy

passport.use(new Strategy({
  clientID: process.env.APP_ID,
  clientSecret: process.env.APP_SECRET,
  callbackURL: 'http://localhost:5000/auth/facebook/callback'
},
    (accessToken, refreshToken, profile, done) => {
      // store user
      return cb(null, profile)
    }))

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
