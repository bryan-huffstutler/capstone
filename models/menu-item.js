const mongoose = require('mongoose')
const Schema = mongoose.Schema

const menuSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
})

module.exports = mongoose.model("MenuItem", menuSchema)