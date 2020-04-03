//Going to write a node js web server without any express
//so we can see how node js implements a server vs how express implements a server

const http = require('http'); 
//require http module, which is part of node js natively
//We just have to ask for it, don't need to npm install it
//module that allows us to make HTTP requests/responses

//the http module has a 'createServer' method
    //that takes 1 argument
    //That argument is a callback 
    //The callback has 2 arguments - request and response object

//call http module and invoke createServer method
//pass a callback into createServer method
    //req and res objects
    //req is an http request from the client
        //req object will contain start line, header, and body
    
    //res is response object we send back
const server = http.createServer((req, res) => {
    // console.log(req);
    //req is the obj that contains everything we know about client making the request


    //res is our way of responding to the requester
    //an http messsage has:
        //1. start-line - node will take care of this
        //2. header - we need to implement this with the 'writeHead' method
        //3. body - we need to implement this with the 'write' method
    
    //writeHead takes 2 arguments:
        //1. status code, i.e. 404, 200, etc 
        //2. object for the mime-type
    res.writeHead(200, {'content-type':'text/html'}); // try 'text/plain' or 'text/html' or 'text/css' These will tell the browser to interpret your response differently

    res.write('<h1>Hello, world</h1>'); //'write' method used to write body of http response 

    res.end(); //this lets the browser (client) know we (the server) wants to close the connection
});

//note: with how we have the server set up right now,
    //our server will respond to requests the exact same way
    //Our server will respond to ANY requests with a '200' code
    // and with a html body of 'Hello, world'

    //e.g. A post request to our server will get back a response of 'Hello, world'

// createServer returns an object with a listen method
    //listen takes 1 argument:
        //1.port to listen for http traffic on
server.listen(3000); //port number 3000 here is almost arbitrary here
    //It must be greater than 1000, you don't have access to ports less than 1000 except if your name is root
    //Line 28, our server is listening to http traffic on port 3000


//Testing if the code works:
    //A. Browser method
        //1. run nodemon nodeServer.js
        //2. go to your browser and go to localhost:3000
            //it should show a Hello, World
    
    //B. Using curl
        //1. You can run this server in your terminal
            //nodemon nodeServer.js

        //2. In another terminal window, you can run curl to initiate an http request
            //curl -v localhost:3000