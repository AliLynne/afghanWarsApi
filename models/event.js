const mongoose = require('mongoose')
const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name cannot be blank'
  },
  start_date: {
    type: Date
  },
  end_date: {
    type: Date
  },
  description: {
    type: String
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

const Event = mongoose.model('Event', eventSchema)
module.exports = Event
