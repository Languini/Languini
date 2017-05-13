const passport = require('passport'),
  Strategy = require('passport-facebook').Strategy

  passport.use(new Strategy({
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/login/facebook/return'
    },
    (accessToken, refreshToken, profile, done) => {
      // store user
      return cb(null, profile)
    }))

  passport.serializeUser((user, done) => {
    done(null, user.id);
  })

  passport.deserializeUser((id, done) => {
    done(null, id);
  })

exports.passport = passport

exports.auth = (req, res) => {
  // if no token (middleware), validate user creds through facebook
  // create, sign and dispatch token
  // redirect to previous route,
}
