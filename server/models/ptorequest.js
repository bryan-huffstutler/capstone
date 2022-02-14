const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ptorequestSchema = new Schema({
   employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
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
  typeOfTime: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  approval: {
    type: String
  }
})

module.exports = mongoose.model("PtoRequest", ptorequestSchema)