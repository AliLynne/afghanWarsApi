const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/afghanwars', {useMongoClient: true})

mongoose.Promise = Promise

module.exports.Person = require('./person')
module.exports.Group = require('./group')
module.exports.Event = require('./event')
