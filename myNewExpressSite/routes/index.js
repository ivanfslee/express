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

  console.log(req.accepts('html'));
    //Basically this is asking if the requester accepts HTML responses 
    //This will return 'html' if the requester accepts 'html' responses
    //or 'false' if it doesn't accept html responses
  //Inside our postman app, in our request,
    //we added an 'Accept' property
    //In our request, we sent a 'GET' request to 'http://localhost:3000'
    //With a modifed 'Accept' header:
      //{Accept: application/json}
      //This means, the requester only accepts json responses
      //So in our express server, req.accepts('html'); will return:
        //'false'

  console.log(req.accepts('json'));
    //This asks if the requester accepts 'json'
    //This will return 'json' if requestor accepts 'json'
    //or 'false' if it doesn't accept 'json'

  //In our postman app, we modified an 'Accept' header for the request
    //{Accept: application/json}
    //So our express server, req.accepts('json'); will return:
      //'json'

  //req.acceptsCharsets();
  //req.acceptsEncodings();
  //req.acceptsLanguages();
    //These three checks if the requester will accept a given character set
      //'Accept-Charset' header - e.g. utf-8
      //'Accept-Encoding' header 
      //'Accept-Language' header - e.g. english/korean/
      
  console.log(req.get('Content-Type'));
  //req.get('Content-Type');
    //Get the value of a header in the request object
    //In this example, we are trying to find out what is the value of the
    //'Content-Type' header in the request object
  
  //req.range();
    //'Range' header parser
  
  //res.append(field [, value]);
    //appends specified value to the HTTP response header field
  
  //res.format(object);
    //It uses req.accepts() to see what kind of content the requester accepts
  
  //res.get();
    //Will return the value of any response headers
    //Handy in a piece of middleware where you don't know what 
    //the final response is that is sent out
  
  //res.links();
    //Sets 'links' headers
  
  //res.location();
    //Sets response 'Localtion' HTTP header
  
  //res.sendStatus(statusCode);
    //Sets the status code
    //e.g. 200/404/
  
  //res.set();
    //Main method you need to remember to set headers in response object
  
  //res.status(code);
    //essentially the same as res.sendStatus();
  
  //res.type(type);
    //Same as req.type();
    //This will set the mime-type/content type explicitly
      //The following two lines are equivalent:
        //res.set('Content-Type', 'text/html');
        //res.type('text/html');
  
  //res.vary(field);
    //Adds the field to the 'vary' response header
    //This has to do with the cache
    
  res.render('index', { title: 'Express' });
});

module.exports = router;
