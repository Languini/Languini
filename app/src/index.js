const createObject = require('./create.js')
const translationObject = require('./translation.js')

createObject.listenForSubmission()
translationObject.listenForCommentSub()
translationObject.listenForAnswerSub()
