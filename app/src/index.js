// note: we can use jQuery globally with '$'
require('whatwg-fetch')

const createObject = require('./create.js')

createObject.listenForSubmission()
console.log("Hello World");
