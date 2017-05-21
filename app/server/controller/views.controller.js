const winston = require('winston')

const { User, Translation, Votes, Comment, Answer } = require('../models')

exports.home = async (req, res) => {
  req.session.redirectTo = req.path
  try {
    const rawArr = await Translation.findAll({
      where: {
        id: {
          $gte: 2
        }
      },
      include: [ User ],
      limit: 10
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
  let translation
  try {
    translation = await Translation.findOne({
      where: {
        id: req.params.id
      },
      include: [
        User,
        { model: Answer,
          include: [
            User,
          { model: Comment, include: [ User ] },
          { model: Votes, include: [ User ] }
          ]}
      ]
    })
  } catch (e) {
    console.error((e))
    res.redirect('/')
  }
  req.session.redirectTo = req.path
  res.render('translation', JSON.parse(JSON.stringify(translation)))
}

exports.vote = async (req, res) => {
  /*
  expects the following params:
  - UserId (will be req.user.id)
  - upvote (based on whether up or down arrow was hit)
  - downvote (based on whether up or down arrow was hit)
  - AnswerId (based on ID of answer that was voted on)
  */
  await Votes.create({
    UserId: req.user.id,
    upvote: req.body.upvote,
    downvote: req.body.downvote,
    AnswerId: req.body.AnswerId
  })
  res.redirect(req.session.redirectTo)
}
