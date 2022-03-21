// importing libraries
var createError = require('http-errors') // error handling
var express = require('express') // express library
var path = require('path') // for path.join
var cookieParser = require('cookie-parser') // for parsing cookies
var logger = require('morgan') // HTTP request logger middleware for node.js

// importing routers
var indexRouter = require('./routes/index') // main path router
var usersRouter = require('./routes/users')
var loginRouter = require('./routes/login')

// defining express app
var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// middleware setup
app.use(logger('dev')) // logging changes to the console (3rd party mw)
app.use(express.json()) // allow json data to be sent and received (built in mw)
app.use(express.urlencoded({ extended: false })) // parsing urlencoded (built in mw)
app.use(cookieParser()) // parsing cookies (built in mw)

// add static files middleware (public folder)
app.use(express.static(path.join(__dirname, 'public')))

// request handling chain
// prefix route paths
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/login', loginRouter)

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
  // res.status(err.status || 500).json({
  //   errors: err.status,
  //   message: err.message,
  // })
  res.status(err.status || 500) // set status code, if not set, default to 500
  res.render('error') // rendering error page
})

module.exports = app