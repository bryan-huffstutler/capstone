if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const expressJwt = require('express-jwt')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/auth', require('./routes/authRouter.js'))

//Error Handler
app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "Unauthorized Error") {
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

const PORT = '5000'

app.listen(`${PORT}`, console.log(`Server running on Port: ${PORT}`))