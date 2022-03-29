// module/function imports
var createError = require('http-errors') // error handling
var express = require('express') // express library
var path = require('path') // for path.join
var logger = require('morgan') // HTTP request logger middleware for node.js
var expressLayout = require('express-ejs-layouts') // layout for ejs
var session = require('express-session') // session middleware
var mongoose = require('mongoose') // mongoose library
require('dotenv').config() // load .env file

var app = express() // define express app
var DB_URI = process.env.DB_URI // database URI

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database')
  })
  .catch((err) => {
    console.log('MongoDB connection error')
  })

// view engine & ejs layout setup
app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'ejs')
app.use(expressLayout)
app.set('layout', 'layouts/default')

// middleware setup
app.use(logger('dev')) // logging changes to the console (3rd party mw)
app.use(express.json()) // allow json data to be sent and received (built in mw)
app.use(express.urlencoded({ extended: false })) // parsing urlencoded (built in mw)
app.use(express.static(path.join(__dirname, 'public'))) // add static files (public folder)

// import main routes
app.use('/', require('./src/routes'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// internal error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  // render the error page
  res.status(err.status || 500) // set status code, if not set, default to 500
  res.render('pages/error') // rendering error page
})

module.exports = app
