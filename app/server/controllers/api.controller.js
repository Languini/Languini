exports.someFunction = (req, res) => {

}

exports.createPost = (req, res) => {
  console.log(req.body)
  res.json(req.body)
}
