const apiRouter = require('./Router/index')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const db = 'mongodb://localhost/27017/vue-qq'
mongoose.connect(db)

mongoose.connection.on('open', () => console.log('MongoDB Connection Successed'))
mongoose.connection.on('error', () => console.log('MongoDB Connection Error'))

const app = express()
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false}))

app.use('/api', apiRouter)
module.exports = app