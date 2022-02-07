const express = require('express')
const adminRouter = express.Router()
const Employee = require('../models/employee')
const Event = require('../models/event')
const MenuItem = require('../models/menu-item')

//get all employees -- TESTED GOOD
adminRouter.get('/employees', (req, res, next) => {
  Employee.find().then(x => {
    res.send(x)
    res.status(200)
  })
})

//get one employee -- TESTED GOOD
adminRouter.get('/employees/:employeeId', (req, res, next) => {
  Employee.findOne({ _id: req.params.employeeId }, (err, employee) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(employee)
  })
})

//Create new employee -- TESTED GOOD
adminRouter.post('/employees', (req, res, next) => {
  const newEmployee = new Employee(req.body)
  newEmployee.save((err, savedEmployee) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedEmployee)
  })
})

//Update employee -- TESTED GOOD
adminRouter.put('/employees/:employeeId', (req, res, next) => {
  Employee.findOneAndUpdate(
    { _id: req.params.employeeId },
    req.body,
    { new: true },
    (err, updatedEmployee) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(updatedEmployee)
    })
})

//Delete employee -- TESTED GOOD
adminRouter.delete('/employees/:employeeId', (req, res, next) => {
  Employee.findOneAndDelete(
    { _id: req.params.employeeId },
    (err, deletedEmployee) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted ${deletedEmployee} from database.`)
    }
  )
})

//Get All Events -- TESTED GOOD
adminRouter.get('/event', (req, res, next) => {
  Event.find().then(x => {
    res.send(x)
    res.status(200)
  })
})

//Get one Event -- TESTED GOOD
adminRouter.get('/event/:eventId', (req, res, next) => {
  Event.findOne({ _id: req.params.eventId }, (err, event) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(event)
  })
})

//Add Event -- TESTED GOOD
adminRouter.post('/event', (req, res, next) => {
  const newEvent = new Event(req.body)
  newEvent.save((err, savedEvent) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedEvent)
  })
})

//Edit Event -- TESTED GOOD
adminRouter.put('/event/:eventId', (req, res, next) => {
  Event.findOneAndUpdate(
    { _id: req.params.eventId },
    req.body,
    { new: true },
    (err, updatedEvent) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedEvent)
    }
  )
})

//Delete Event -- TESTED GOOD
adminRouter.delete('/event/:eventId', (req, res, next) => {
  Event.findOneAndDelete(
    { _id: req.params.eventId },
    (err, deletedEvent) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted ${deletedEvent} from database.`)
    }
  )
})

//Get All Menu Items -- TESTED GOOD
adminRouter.get('/menu', (req, res, next) => {
  MenuItem.find().then(x => {
    res.send(x)
    res.status(200)
  })
})

//Get one Menu Item -- TESTED GOOD
adminRouter.get('/menu/:itemId', (req, res, next) => {
  MenuItem.findOne({ _id: req.params.itemId }, (err, menuItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(menuItem)
  })
})

//Add new Menu Item -- TESTED GOOD
adminRouter.post('/menu', (req, res, next) => {
  const newItem = new MenuItem(req.body)
  newItem.save((err, savedItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedItem)
  })
})

//Update Menu Item -- TESTED GOOD
adminRouter.put('/menu/:itemId', (req, res, next) => {
  MenuItem.findOneAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedItem)
    }
  )
})

//Delete Menu Item -- TESTED GOOD
adminRouter.delete('/menu/:itemId', (req, res, next) => {
  MenuItem.findOneAndDelete(
    { _id: req.params.itemId },
    (err, deletedItem) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted ${deletedItem} from database.`)
    }
  )
})

//Filter by Category -- TESTED GOOD
adminRouter.get('/menu/filter/:cat', (req, res, next) => {
  MenuItem.find({ category: req.params.cat }, (err, item) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(item)
  })
})



module.exports = adminRouter