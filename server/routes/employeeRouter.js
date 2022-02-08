const express = require('express')
const employeeRouter = express.Router()
const ptorequest = require('../models/ptorequest')

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

module.exports = employeeRouter