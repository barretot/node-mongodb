const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

mongoose.connect('mongodb+srv://study-user:78912312@estudos-j0af6.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()
app.use(express.json())
app.use(routes)

app.listen(3002)