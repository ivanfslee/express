var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //morgan is a node_module for debugging/logging

var indexRouter = require('./routes/index'); //They've included 2 routers 
var usersRouter = require('./routes/users'); //One router for index routes and one router for users routes

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); //They set view engine to 'jade'

app.use(logger('dev')); //Logger initialized here
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); //Applying the index router (line 7)
app.use('/users', usersRouter); //Applying the user router (line 8)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); //Line 1 - http-errors node_module
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; 
//No app.listen(<port number>) here. 
//Instead they export app, which means, some other file will require this app.js file
//The file requiring 'app.js' is the www file in the bin (binary) folder
//The www file also sets the port (3000, in this case)
