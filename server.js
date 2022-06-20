if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const path = require('path')
const expressJwt = require('express-jwt')
const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//Middleware
app.use(express.json())
app.use(morgan('dev'))

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb+srv://bhuff8404:vectorkill581@cluster0.pqcmcze.mongodb.net/BBs', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    console.log(error.message)
  }
}
connectDb()
// async function connectToDB() {
//   await mongoose.connect("mongodb://localhost:27017/BBs",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     });
//   console.log("Connected to the DB");
// }
// connectToDB().catch((err) => console.log(err));

//Routes
app.use('/api', expressJwt({ secret: 'secret', algorithms: ['HS256'] }))
app.use('/auth', require('./routes/authRouter.js'))
app.use('/admin', require('./routes/adminRouter.js'))
app.use('/employee', require('./routes/employeeRouter.js'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/capstone/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'capstone', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('api running')
  })
}

//Error Handler
app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "Unauthorized Error") {
    res.status(err.status)
  }
  return res.send({ errMsg: err.message })
})



app.listen('5000', () => console.log(`Server running on Port: 5000`))