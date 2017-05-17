const { Translation } = require('../models')

exports.someFunction = (req, res) => {

}

exports.createPost = (req, res) => {
  console.log(`body: ${JSON.stringify(req.body)}`)
  Translation
    .create(req.body)
    .then((transPost) => {
      // res.json(transPost)
    })
    .catch(err => {
      console.log(err)
      // res.redirect('/create')
    })
}
