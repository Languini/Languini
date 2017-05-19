const winston = require('winston')

const { User, Translation, Votes, Comment, Answer } = require('../models')

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({
      filename: 'somefile.log'
    })]
})

exports.home = async (req, res) => {
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
    res.render('index', { info: arr })
  } catch (e) {
    console.log(e)
  }
}

exports.create = (req, res) => {
  res.render('create')
}

exports.translate = async (req, res) => {
  let translation
  let user
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
    translation = "Error getting translation"
  }
  console.log(JSON.parse(JSON.stringify(translation.dataValues)))
  res.render('translation', translation.dataValues)
}
