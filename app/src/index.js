const navHandler = require('./nav')
const homeHandler = require('./home')
const createObject = require('./create')

navHandler.navListener()
homeHandler.homeListener()
createObject.listenForSubmission()
