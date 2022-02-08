const mongoose = require('mongoose')
const Schema = mongoose.Schema

const addressSchema = new Schema({
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  street: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Address", addressSchema)