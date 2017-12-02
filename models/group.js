const mongoose = require('mongoose')
const groupSchema = new mongoose.Schema({
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

const Group = mongoose.model('Group', groupSchema)
module.exports = Group
