const winston = require('winston')

const { User, Translation } = require('../models')

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
  res.render('create', { user: req.user && req.user.dataValues })
}

exports.translate = (req, res) => {
  //
}
