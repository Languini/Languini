const navHandler = require('./nav')
const homeHandler = require('./home')
const createObject = require('./create')

navHandler.listenForLog()
homeHandler.listenForPostClick()
createObject.listenForSubmission()
