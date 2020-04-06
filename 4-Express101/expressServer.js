//http is a native module - so you don't have to install it
    //Also, with express we don't need the http module
    //const http = require('http');

//express is a 3rd party module - so you have to run 'npm install express --save'
//we run 'npm init' to create a package.json file in this directory
//then we run 'npm install express --save' 
    //--save adds the module we are installing as a dependency

const express = require('express'); //our const express contains a function called 'createApplication' that is exported from Express node module
const app = express(); //our const express is a function, so we want to invoke it, hence the '()' after it. It's invocation is stored in const app
    //Line 11 is creating an express application, hence we name the const, 'app'

//alternative to lines 10 and 11 is 'const express = require('express')();' 
    //but that is not convention

//all is a method that takes 2 arguments:
    //1. the route
    //2. callback function to run if the route is requested
app.all('*', (req, res) => {
    //Node handles the start-line as usual
    //Express handles the basic headers (status code, mime-type) e.g. res.writeHead(200, {'content-type':'text/html'}); is not needed here
    //We need to handle the body with 'res.send(<stuff we want to send here>);'
    //Express handles the end of the response - e.g. res.end() is not needed here
    res.send('<h1>This is the home page!!!</h1>');
})

app.listen(3000); //listen method can have a second argument, callback function that runs once
console.log('The server is listening on port 3000')