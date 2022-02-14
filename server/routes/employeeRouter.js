const express = require('express')
const employeeRouter = express.Router()
const ptorequest = require('../models/ptorequest')
const TimeOff = require('../models/timeoff')

//Request Time Off
employeeRouter.post('/ptorequest', (req, res, next) => {
  const newRequest = new ptorequest(req.body)
  newRequest.save((err, savedRequest) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedRequest)
  })
})

//Get employee Timeoff 
employeeRouter.get('/pto/:empId', (req, res, next) => {
  TimeOff.findOne({employee: req.params.empId}, (err, pto) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(pto)
  })
})

module.exports = employeeRouter