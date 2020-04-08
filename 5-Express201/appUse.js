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

app.listen(3000);
console.log('Server listening on port 3000');