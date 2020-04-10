const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());

app.use(express.static('public'));
//if you go inside express.static - you will find a function with req and res because it is a piece of middleware
//Just like app.post(), app.get(), etc

//This is middleware
//we bring in express.json() like this:
app.use(express.json()); //this is for data that is passed and has content-type/mime-type 'application/json or text/javascript'

//This is middleware
//If someone sends us data with a header and 'content-type/mime-type' of 'application/x-www-form-urlencoded; charset=UTF-8' we need this express.urlencoded middleware to parse out that data
//we bring in express.urlencoded() like this:
app.use(express.urlencoded({extended:false})); //This line enables us to get the ajax.html JSON data ({name: 'Rob'}) that was sent from the ajax request

//IMPORTANT NOTE: 
    //app.use(express.json()) and app.use(express.urlencoded()) are two important middleware
    //Together, they collect any type of submitted data, parse it and give it to you in json format

//This defined route will handle the ajax request from ajax.html
app.post('/ajax', (req, res) => {
    console.log(req.body); //req.body contains the json data {name: 'Rob'} that was sent from ajax.html
        //req.body is the mirror image of the object that was sent from ajax.html
    res.send('Testing'); //This will get sent back to the browser
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
    //so the mime type is 'application/x-www-form-urlencoded'

    //we can bring in options like {extended:false}
        //app.use(express.urlencoded({extended:false}));

    //
app.listen(3000);
console.log('Server is listening on port 3000');
 
//Helmet - express middleware
    //It sets the HTTP headers right up front and protects from a bunch of well-known vulnerabilities

//Request object properties that we have explored so far:
    //req.body - contains the json data {name: "Rob"} from ajax request initiated in ajax.html
        //req.body is called 'body' because it is based on the 'body-parser' module
        //req.body is the mirror of whatever data was sent from the ajax.html ajax request
        //req.body only exists because of the express.json() middleware creates the empty object {}
        //req.body is filled up with data from express.urlencoded({extended:false}) middleware (line 18)
    //req.headers - this will show that the content-type/mime-type is 'application/x-www-form-urlencoded; charset=UTF-8'
    //req.route
    //Google - request object deconstructed