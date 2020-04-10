const express = require('express');
const app = express();
app.use(express.static('public'));
//if you go inside express.static - you will find a function with req and res because it is a piece of middleware
//Just like app.post(), app.get(), etc

//This is middleware
//we bring in express.json() like this:
app.use(express.json());

//This is middleware
//we bring in express.urlencoded() like this:
app.use(express.urlencoded({extended:false}));

//This defined route will handle the ajax request from ajax.html
app.post('/ajax', (req, res) => {
    console.log(req);
    res.send('Testing');
});

//In addition to 'create application' - (line 2) and express.static(); (line 3)
//We use other express methods:
    //express.json();
    //express.urlencoded();
    //express.Router();

//express.json();
    //Built-in middleware function in express.
    //It parses incoming requests with JSON payloads and is based on 'body-parser' module in node_modules
    //Express has 'body-parser' module as a dependency for itself
    //Express uses 'body-parser' module to implement express.json()

    //If the content-type comes through as 'application/json '
    //then express.json() will come in and parse the body for us.

    //Json is any data that comes into any server, even if its an express server, it will be interpreted as a string

//express.urlencoded()
    //Built-in middleware function in express.
    //It parses incoming requests with urlencoded payloads (as opposed to json) and is based on 'body-parser'
    //so the type is 'application/x-www-form-urlencoded'

    //we can bring in options like {extended:false}
        //app.use(express.urlencoded({extended:false}));

    //7:11
app.listen(3000);
console.log('Server is listening on port 3000');