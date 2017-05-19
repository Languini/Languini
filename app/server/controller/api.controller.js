const fetch = require('node-fetch')
const withQuery = require('with-query')

const { Translation, Answer, Comment, Votes } = require('../models')

function languageCode (language) {
  return [
    {
      'languageCode': 'ar',
      'languageName': 'Arabic'
    },
    {
      'languageCode': 'bs',
      'languageName': 'Bosnian'
    },
    {
      'languageCode': 'bg',
      'languageName': 'Bulgarian'
    },
    {
      'languageCode': 'ca',
      'languageName': 'Catalan'
    },
    {
      'languageCode': 'zh-CHS',
      'languageName': 'Chinese Simplified'
    },
    {
      'languageCode': 'zh-CHT',
      'languageName': 'Chinese Traditional'
    },
    {
      'languageCode': 'hr',
      'languageName': 'Croatian'
    },
    {
      'languageCode': 'cs',
      'languageName': 'Czech'
    },
    {
      'languageCode': 'da',
      'languageName': 'Danish'
    },
    {
      'languageCode': 'nl',
      'languageName': 'Dutch'
    },
    {
      'languageCode': 'en',
      'languageName': 'English'
    },
    {
      'languageCode': 'et',
      'languageName': 'Estonian'
    },
    {
      'languageCode': 'fi',
      'languageName': 'Finnish'
    },
    {
      'languageCode': 'fr',
      'languageName': 'French'
    },
    {
      'languageCode': 'de',
      'languageName': 'German'
    },
    {
      'languageCode': 'el',
      'languageName': 'Greek'
    },
    {
      'languageCode': 'ht',
      'languageName': 'Haitian Creole'
    },
    {
      'languageCode': 'he',
      'languageName': 'Hebrew'
    },
    {
      'languageCode': 'hi',
      'languageName': 'Hindi'
    },
    {
      'languageCode': 'mww',
      'languageName': 'Hmong Daw'
    },
    {
      'languageCode': 'hu',
      'languageName': 'Hungarian'
    },
    {
      'languageCode': 'id',
      'languageName': 'Indonesian'
    },
    {
      'languageCode': 'it',
      'languageName': 'Italian'
    },
    {
      'languageCode': 'ja',
      'languageName': 'Japanese'
    },
    {
      'languageCode': 'sw',
      'languageName': 'Kiswahili'
    },
    {
      'languageCode': 'ko',
      'languageName': 'Korean'
    },
    {
      'languageCode': 'lv',
      'languageName': 'Latvian'
    },
    {
      'languageCode': 'lt',
      'languageName': 'Lithuanian'
    },
    {
      'languageCode': 'ms',
      'languageName': 'Malay'
    },
    {
      'languageCode': 'mt',
      'languageName': 'Maltese'
    },
    {
      'languageCode': 'no',
      'languageName': 'Norwegian'
    },
    {
      'languageCode': 'fa',
      'languageName': 'Persian'
    },
    {
      'languageCode': 'pl',
      'languageName': 'Polish'
    },
    {
      'languageCode': 'pt',
      'languageName': 'Portuguese'
    },
    {
      'languageCode': 'ro',
      'languageName': 'Romanian'
    },
    {
      'languageCode': 'ru',
      'languageName': 'Russian'
    },
    {
      'languageCode': 'sr-Cyrl',
      'languageName': 'Serbian (Cyrillic)'
    },
    {
      'languageCode': 'sr-Latn',
      'languageName': 'Serbian (Latin)'
    },
    {
      'languageCode': 'sk',
      'languageName': 'Slovak'
    },
    {
      'languageCode': 'sl',
      'languageName': 'Slovenian'
    },
    {
      'languageCode': 'es',
      'languageName': 'Spanish'
    },
    {
      'languageCode': 'sv',
      'languageName': 'Swedish'
    },
    {
      'languageCode': 'th',
      'languageName': 'Thai'
    },
    {
      'languageCode': 'tr',
      'languageName': 'Turkish'
    },
    {
      'languageCode': 'uk',
      'languageName': 'Ukrainian'
    },
    {
      'languageCode': 'ur',
      'languageName': 'Urdu'
    },
    {
      'languageCode': 'vi',
      'languageName': 'Vietnamese'
    },
    {
      'languageCode': 'cy',
      'languageName': 'Welsh'
    },
    {
      'languageCode': 'yua',
      'languageName': 'Yucatec Maya'
    }
  ].filter(pair => pair.languageName === language)[0].languageCode
}

exports.getTrans = async (req, res) => {
  // expects a query string containing the user's ID (uid)
  let trans
  if (req.query.uid) {
    try {
      trans = await Translation.findAll({
        where: {
          UserId: req.query.uid
        },
        limit: 1000
      })
      return res.status(200).json(trans)
    } catch (e) {
      return res.status(500).json('Error fetching resource')
    }
  } else {
    try {
      trans = await Translation.findAll({
        where: {
          id: {
            $gte: 1
          }
        },
        limit: 1000
      })
      return res.status(200).json(trans)
    } catch (e) {
      return res.status(500).json('Error fetching resource')
    }
  }
}

exports.createTrans = async (req, res) => {
  req.body.UserId = req.user.id;
  const transReq = await Translation.create(req.body)
  const translated = await fetch(withQuery(
    'http://www.transltr.org/api/translate',
    {
      text: transReq.request,
      to: languageCode(transReq.language),
      from: 'en'
    }
  ))
  const trans = (await translated.json()).translationText
  const ans = await Answer.create({
    content: trans,
    TranslationId: transReq.id,
    UserId: 1
  })
  res.status(200).json({
    translation_request: transReq,
    languini_answer: ans
  })
}

exports.createAns = async (req, res) => {
  /*
  expects the following params:
  - UserId (will be req.user.id)
  - TranslationId (from a data-id on answer or w/e)
  - content
  */
  try {
    res.status(200).json(await Answer.create(req.body))
  } catch (e) {
    res.status(500).json('Error creating answer')
  }
}

exports.getAns = async (req, res) => {
  // expects a query string containing the translation's ID (tid)
  let ans
  if (req.query.tid) {
    try {
      trans = await Answer.findAll({
        where: {
          TranslationId: req.query.tid
        },
        include: [ Votes ],
        limit: 1000
      })
      return res.status(200).json(ans)
    } catch (e) {
      return res.status(500).json('Error fetching resource')
    }
  } else {
    try {
      trans = await Answer.findAll({
        where: {
          id: {
            $gte: 1
          }
        },
        limit: 1000
      })
      return res.status(200).json(ans)
    } catch (e) {
      return res.status(404).json(ans)
    }
  }
}

exports.getComm = async (req, res) => {
  // expects a query string containing the answer's id (aid)
  let comm
  if (req.query.aid) {
    try {
      comm = await Comment.findAll({
        where: {
          AnswerId: req.query.aid
        },
        limit: 1000
      })
      return res.status(200).json(comm)
    } catch (e) {
      return res.status(500).json('Error fetching comment')
    }
  } else {
    try {
      comm = await Comment.findAll({
        where: {
          id: {
            $gte: 1
          }
        },
        limit: 1000
      })
      return res.status(200).json(comm)
    } catch (e) {
      return res.status(500).json('Error fetching comment')
    }
  }
}

exports.createComm = async (req, res) => {
  /*
  expects the following params:
  - UserId (will be req.user.id)
  - AnswerId (from a data-id on comment or w/e)
  - content
  */
  try {
    res.status(200).json(await Comment.create(req.body))
  } catch (e) {
    res.status(500).json('Error creating comment')
  }
}

exports.postVote = async (req, res) => {
  /*
  expects the following params:
  - UserId (will be req.user.id)
  - upvote (based on whether up or down arrow was hit)
  - downvote (based on whether up or down arrow was hit)
  - AnswerId (based on ID of answer that was voted on)
  */
  const vote = {
    UserId: req.user.id,
    upvote: req.body.upvote,
    downvote: req.body.downvote,
    AnswerId: req.body.AnswerId
  }
  try {
    res.status(json(await Votes.upsert(vote)))
    // returns true if row did not exist
  } catch (e) {
    res.status(500).json("Error submitting vote")
  }
}
