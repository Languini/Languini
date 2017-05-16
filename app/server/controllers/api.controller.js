exports.someFunction = (req, res) => {

}

exports.createPost = (req, res) => {
  db.Translation.create(req.body).then((transPost) => {
    res.json(transPost);
  })
}
