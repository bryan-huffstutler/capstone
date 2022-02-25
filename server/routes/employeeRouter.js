const express = require('express')
const employeeRouter = express.Router()
const PtoRequest = require('../models/ptorequest')
const TimeOff = require('../models/timeoff')
const Employee = require('../models/employee')
const Address = require('../models/address')

//Request Time Off -- TESTED GOOD
employeeRouter.post('/ptorequest', (req, res, next) => {
  const newRequest = new PtoRequest(req.body)
  newRequest.save((err, savedRequest) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedRequest)
  })
})

//Get employee Timeoff -- TESTED GOOD
employeeRouter.get('/pto/:empId', (req, res, next) => {
  TimeOff.findOne({ employee: req.params.empId }, (err, pto) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(pto)
  })
})

//Get Employee PTORequests -- TESTED GOOD
employeeRouter.get('/ptorequests/:empId', (req, res, next) => {
  PtoRequest.find({ employee: req.params.empId }, (err, ptoReq) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(ptoReq)
  })
})

//Get Employee Info -- TESTED GOOD
employeeRouter.get('/info/:empId', (req, res, next) => {
  Employee.findOne({ _id: req.params.empId }, (err, info) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    res.status(200).send(info)
  })
})

//Cancel PTO Request
employeeRouter.delete('/ptorequests/:ptoId', (req, res, next) => {
  PtoRequest.findOneAndDelete({ _id: req.params.ptoId }, (err, pto) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${pto}`)
  })
})

//Get employee address
employeeRouter.get(`/address/:empId`, (req, res, next) => {
  Address.findOne({ employee: req.params.empId }, (err, addy) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(addy)
  })
})

//Update employee address
employeeRouter.put(`/address/:empId`, (req, res, next) => {
  Address.findOneAndUpdate(
    { employee: req.params.empId },
    req.body,
    { new: true },
    (err, updatedAddress) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedAddress)
    }
  )
})

//Update Personal Info
employeeRouter.put(`/info/:empId`, (req, res, next) => {
  Employee.findOneAndUpdate(
    {_id: req.params.empId },
    req.body,
    { new: true },
    (err, updatedInfo) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedInfo)
    }
  )
})

module.exports = employeeRouter