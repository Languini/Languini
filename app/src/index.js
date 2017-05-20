const navHandler = require('./nav')
const homeHandler = require('./home')
const createObject = require('./create')
const voteHandler = require('./vote')

navHandler.navListener()
homeHandler.homeListener()
createObject.listenForSubmission()
voteHandler.voteListener()
