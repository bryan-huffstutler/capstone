const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    lowercase: true
  }
})

module.exports = mongoose.model("Event", eventSchema)