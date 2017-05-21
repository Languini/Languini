exports.loggedIn = (req, res) => {
  console.log(`\n\n\n session: ${JSON.stringify(req.session)} \n\n\n`)
  res.redirect(req.session.redirectTo)
}

exports.logout = (req, res) => {
  console.log(`\n\n\n params: ${JSON.stringify(req.params)} \n\n\n`)
  req.logout()
  res.redirect(req.session.redirectTo)
}
