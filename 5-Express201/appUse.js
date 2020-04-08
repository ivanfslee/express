//Middleware - it's all Express really is

//Recall, Express is 2 things
    //1. It's a router
    //2. It's middleware that comprises a web framework
        //'Middleware' - something in between 2 things

        //Middleware comes in between the request and response

        // HTTP request (TCP/IP/HTTP) -> gets to us the developer, we formulate a response -> We send out the response (HTTP/TCP/IP)

        //The middleware part is all the stuff that happens between the actual
            //networking stuff

        //Request ----> MIDDLEWARE ---> Response

    //More formal definition of 'Middleware':
        //Middleware function is ANY function that has access to the req, res, next object

        //Express then, is a whole bunch of functions, working together that have access
            //to these three objects - req, res, next
            //Things that slowly piece together a web framework and a router
    
const express = require('express');
const app = express();

//Examples:
//Request ----> MIDDLEWARE ---> Response
//1. Request comes in
//2. We need to validate the user, sometimes.
//3. We need to store some things in the database.
//4. If there is data from the user, we need to parse it and store it.
//5. Respond however we need to, e.g. json, serve up html, etc

//We could do 1-5 in a single app.get() or app.post()

//Steps 2, 3, 4 , we can use app.use or whatever the request method might be
//Steps 2, 3, 4 are accomplished by middleware

//Example middleware - we will do step 2 - validating a user
function validateUser(req, res, next) { //the 'next' parameter makes it middleware 
    //get info out of the req object
    //Do some stuff with database here

    //response object has a property called 'locals'
    //It is attached to every response
    //It will live for the life of this response
    //And it is useful for passing data over to a template
    //But for our purposes, we just going to pass it around from place to place

    //Every piece of middleware will have access to it, because every piece of middleware
        //has access to the response object

    res.locals.validated = true;
    console.log('VALIDATED RAN!');
    next(); //When we call next, it tells express I want to hand control off to the next piece of middleware in the cycle
        //If you don't call next, then you have terminated the cycle and that the process will end.
        //There won't be another piece of middleware to run.
}

//Just like express.static(), we pass validateUser function to app.use()
//This tells express, I want to use validateUser at the app (application) level
//So everyone will use validateUser
//validateUser function will run everytime an HTTP request is made
//Then validateUser function runs. At the end of that function, next() runs
//Which means, the next piece of middleware will run
app.use(validateUser); //This will run validateUser all routes (e.g. '/', '/admin', '/sdfsdf') and all types of HTTP methods (GET, POST, PUT, DELETE, etc)

app.use('/admin', validateUser); //This will run validateUser on '/admin' route and all types of HTTP methods

app.get('/', validateUser); //This will validateUser on '/' and only HTTP GET requests

app.get('/', (req, res, next) => {
    //we can access the res.locals.validated that was manipulated in validateUser function
    //We see that this will log, 'true', from the changes made in the validateUser function
    console.log(res.locals.validated); //with this line, we can outsource the work of one function, validateUser in this case
    res.send('<h1>Main Page</h1>');
});

//So if we go to localhost:3000 in our browser, this would show up:
    //Main Page (from line 72)

    //This would show up in console:
        //VALIDATED RAN!  (From line 66)
        //VALIDATED RAN!  (From line 70)
        //true            (From line 75)


//If we go to localhost:3000/admin in our browser, this would show up:
    //Cannot GET /admin (Because we aren't serving anything on that route, except validateUser function)

    //This would show up in console:
        //VALIDATED RAN!  (From line 66)
        //VALIDATED RAN!  (From line 68)

app.listen(3000);
console.log('Server listening on port 3000');

//Summary:
    //Middleware is anything that has access to req, res, and next objects


//So app.get(), app.post(), app.delete(), these all act as middleware
//Middleware will be passed to the next middleware as long as the next() is run
//If there is no next() call. Then it stops.

//Difference between app.all('*') and app.use('/')?
    //https://stackoverflow.com/questions/14125997/difference-between-app-all-and-app-use