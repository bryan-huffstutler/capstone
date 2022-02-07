const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    lowercase: true
  },
  lastName: {
    type: String,
    required: true,
    lowercase: true
  },
  phone: {
    type: Number,
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
  address: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  ssn: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Employee', employeeSchema)