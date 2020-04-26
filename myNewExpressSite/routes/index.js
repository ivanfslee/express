var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  // const date = new Date(1969, 6, 20);
  // res.set('Date', date); 
    //setting the date header to a specific date
  
  // res.set('Cache-Control', 'no-store'); 
    //This will tell the browser, that you don't want to cache the response
    //This is good for development when you are fighting the cache every time
    //But don't use for production-level code
    
  // res.set('Content-Type', 'text/html');
  
  // res.set('Content-Type', 'text/plain'); 
    //setting the 'Content-Type' header to 'text/plain'. Before this, it was 'text/html'

  //console.log(req.fresh);
  //console.log(req.stale);
  //'fresh' and 'stale' headers that are part of the request
    //'fresh' returns true if it is not stale
    //'stale' returns true if it is stale
    //'fresh' and 'stale' are essentially opposite properties


  // console.log(req.accepts('html'));
    //Basically this is asking if the requester accepts HTML responses 
    //This will return 'html' if the requester accepts 'html' responses
    //or 'false' if it doesn't accept html responses

  console.log(req.accepts(['json', 'html']));
    //This asks if the requester accepts 'json'
    //This will return 'json' if requestor accepts 'json'
    //or 'false' if it doesn't accept 'json'

  res.render('index', { title: 'Express' });
});

module.exports = router;
