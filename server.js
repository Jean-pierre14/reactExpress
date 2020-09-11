const express = require('express')
const { success, error } = require('consola')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 7000

// Database connection
const db = require('./config/db')

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Router
const router = require('./routes/')
app.use('/', router)

app.listen(PORT, (err) => {
    if(err) error({message: `Error ${err}`, badge: true})
    success({message: `Server started on port ${PORT}`, badge: true})
})