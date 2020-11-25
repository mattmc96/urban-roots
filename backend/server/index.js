const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
app.use(morgan('dev'))

dotenv.config()

// import routes
const authRoutes = require('../routes/auth')
const dashboardRoutes = require('../routes/dashboard')
const verifyToken = require('../routes/validate-token')
const productRoutes = require('../routes/product')

// middlewares
app.use(express.json()) // for body parser

// route middlewares
app.use('/api/user', authRoutes)
app.use('/api/dashboard', verifyToken, dashboardRoutes)
app.use('/api/products', productRoutes)

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) console.log('Error in server setup')
  console.log(`👨 To Infinity & Beyond on Port => ${process.env.SERVER_PORT}`),
    // connect to db
    mongoose.connect(
      process.env.DB_CONNECT,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      () => console.log(`Our oven is set to ${process.env.SERVER_PORT} deg`)
    )
  mongoose.connection.on('error', (e) => {
    console.log('mongo connect error!')
  })
  mongoose.connection.on('connected', () => {
    console.log(`🚀 DB Blasting Off in ${process.env.SERVER_PORT} seconds`)
  })
})
