// note: we can use jQuery globally with '$'
require('wg-fetch')

const createObject = require('./create.js')

createObject.listenForSubmission()
console.log("Hello World");
