require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env

mongoose.connect(CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log("DB Connected! Let's get it!")
})

app.listen(SERVER_PORT, () => {
    console.log(`SERVER CONNECTED ON PORT ${SERVER_PORT}!`)
})