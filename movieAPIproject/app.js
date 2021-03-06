//We need to think about the structure of our server
  //Our goal is to create endpoints for somebody else to come and hit

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const apiKey = require('./apiKey');

//We only had the following routes in our other project accessing the api
  //  /movie/<something>
  //  /search/<something>
  //  /now_playing

// /now_playing
var indexRouter = require('./routes/index');

// /movie/...
const movieRouter = require('./routes/movie');

// /search/...
const searchRouter = require('./routes/search');


var app = express();
app.use(helmet());

//We define middleware to validate apiKey of the user making the request
app.use((req, res, next) => {
  //In a production environment, we would query the database to
    //check if it is a valid apiKey
    //We don't have a database here, so we just check directly
  if (req.query.api_key != apiKey.key) {

    res.status(401); //'401' HTTP code means 'Unauthorized'

    //Express will send a '200' status code with res.json()
      //So we have to manually send a '401' status code
      //Which means, 'Unauthorized'
      //Since we are programming the API server,
        //We are in charge of the headers now, so we
        //have to set the headers manually to be '401' code
    res.json('Invalid API key');
  } else {
    next();
  }
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/movie', movieRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

//HTTP status codes
  //304 - not modified , clear cache and hard reset to resolve
    //304 is returned to the client when the cached copy of a particular file is up to date with the server. 
    //That is, response to be sent to the client is the same as the client's cached copy,
      //So there is no need to send response again, just use the cached copy in client's browser
  //404 - not found
  //401 - unauthorized