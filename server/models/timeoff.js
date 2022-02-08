const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeoffSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: true
  },
  vacation: {
    type: Number,
    required: true
  },
  sick: {
    type: Number,
    required: true
  },
  personal: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Timeoff", timeoffSchema)