const { Translation } = require("../models");

exports.someFunction = (req, res) => {

}

exports.createPost = (req, res) => {
  console.log(req.body);
  Translation
    .create(req.body)
    .then((transPost) => {
    res.json(transPost);
  })
}
