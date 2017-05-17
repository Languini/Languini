exports.loggedIn = (req, res) => {
  res.redirect('/')
}

exports.logout = (req, res) => {
  req.logout()
  res.redirect('/')
}
