exports.loggedIn = (req, res) => {
  res.redirect(req.session.redirectTo)
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect(req.session.redirectTo)
}
