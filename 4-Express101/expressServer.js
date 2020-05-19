//http is a native module - so you don't have to install it
    //Also, with express we don't need the http module
    //const http = require('http');

//'path' is a native module to node JS
const path = require('path');

//express is a 3rd party node module - so you have to run 'npm install express --save'
//we run 'npm init' to create a package.json file in this directory
//then we run 'npm install express --save' 
    //--save adds the module we are installing as a dependency

const express = require('express'); //our const express contains a function called 'createApplication' that is exported from Express node module
const app = express(); //our const express is a function, so we want to invoke it, hence the '()' after it. It's invocation is stored in const app
    //Line 14 is creating an express application, hence we name the const, 'app'

//alternative to lines 13 and 14 is 'const express = require('express')();' 
    //but that is not convention

//serve up static files from 'public' folder using 'serve-static' module
app.use(express.static('public'));

//all is a method that takes 2 arguments:
    //1. the route
    //2. callback function to run if the route is requested
app.all('/', (req, res) => {
    //Node handles the start-line as usual
    //Express handles the basic headers (status code, mime-type) e.g. res.writeHead(200, {'content-type':'text/html'}); is not needed here
    //We need to handle the body with 'res.send(<stuff we want to send here>);'
    //Express handles the end of the response - e.g. res.end() is not needed here

    //Read in node.html
    //Instead of res.send, we will use res.sendFile();
    //We use res.sendFile when we want to send back a file, like a hard HTML file
    //To send a file, we will need to pass in an absolute path
        //To send the absolute path, we need the 'path' module (line 6)
        //In order to tell node where the file is, we need the entire path
        //The entire path of where file is on the machine, not where the file is relative to the server

        //We wil need the entire directory name E:/express/4-express101/node.html
    console.log(path.join(__dirname + '/node.html')); //E:/express/4-Express101/node.html
    res.sendFile(path.join(__dirname + '/node.html')); //if any HTTP request is made to app (line 26), send node.html file as response
    
    //note: recall that our node.html file requests styles.css and node.png
        //we don't declare those routes here
        //But, we did declare those routes with our node JS server
        //But we don't need to declare those routes here because the styles.css and node.png are being served statically in our 'public' folder
    
    //Before we used res.sendFile(), we just sent some HTML with res.send
        //e.g. res.send('<h1>This is the home page~!!!</h1>');
});

//This will take care of any other pages that aren't to root page 'localhost:3000' or any static files
//'*' will match any page
//'all' will match any type of request
app.all('*', (req, res) => {
    res.send('<h1>Sorry, this page does not exist</h1>');
});

app.listen(3000); //listen method can have a second argument, callback function that runs once
console.log('The server is listening on port 3000')