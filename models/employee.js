const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  dateOfHire: {
    type: Date
  },
  lastName: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
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