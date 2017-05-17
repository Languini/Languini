var db = require("../models");

exports.someFunction = (req, res) => {

}

exports.createPost = (req, res) => {
  var data = req.body;
  var tra =  {
    request: data.request,
    content: data.content,
    language: data.language,
    UserId: parseInt(data.UserId)
  }
  console.log(tra);
  db.Translation.create(tra).then((transPost) => {
    res.json(transPost);
  })
}
