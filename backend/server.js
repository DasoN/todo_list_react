const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const auth = require('./routers/auth')
const reg = require('./routers/reg')
const main = require('./routers/main')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connetion = mongoose.connection

connetion.once('open', ()=>{
    console.log('DB was connected successfully')
})

app.use('/', main)
app.use('/auth', auth)
app.use('/registration', reg)

app.listen(process.env.PORT)