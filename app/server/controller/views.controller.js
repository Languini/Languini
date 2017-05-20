const winston = require('winston')

const { User, Translation, Votes, Comment, Answer } = require('../models')

exports.home = async (req, res) => {
  req.session.redirectTo = req.path
  try {
    const rawArr = await User.findAll({
      where: {
        id: {
          $gte: 2
        }
      },
      include: [ Translation ],
      limit: 5
    })
    const arr = JSON.parse(JSON.stringify(rawArr))
      .sort((a, b) => {
        if (a.id > b.id) {
          return -1
        }
        return 1
      })
    res.render('index', { info: arr })
  } catch (e) {
    console.log(e)
    res.redirect('/')
  }
}

exports.create = (req, res) => {
  req.session.redirectTo = req.path
  req.user ? res.render('create') : res.redirect('/')
}

exports.translate = async (req, res) => {
  req.session.redirectTo = req.path
  let translation
  try {
    translation = await Translation.findOne({
      where: {
        id: req.params.id
      },
      include: [
        User,
        { model: Answer, include: [
          User,
          { model: Comment, include: [ User ] },
          { model: Votes, include: [ User ] }
        ]},
      ]
    })
  } catch (e) {
    console.log(e)
    res.redirect(req.session.redirectTo)
  }
  res.render('translation', JSON.parse(JSON.stringify(translation)))
}
