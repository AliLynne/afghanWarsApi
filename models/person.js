const mongoose = require('mongoose')
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank'
  },
  description: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

const Person = mongoose.model('Person', personSchema)
module.exports = Person
