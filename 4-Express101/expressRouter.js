//Routing - one of the most powerful and useful things in Express

//Two ways to route in Express
    //1. Simple way - use when your project is quite small

    //2. Complex way - using the actual express 'router' object
        //Full blown middleware, almost like a mini app inside

const express = require('express');

const app = express();

//Recall that app is an object.
    //if we look in the express node module, we see that the express function - createApplication() -
        //returns an object called 'app'
        //'app' has a bunch of associated methods and properties like 'all', 'get', 'use', etc
        //That is how we use 'app' as a router.
        
    //app object has many methods:
        //1. get method - meant to ask for a resource/data e.g. enter url in browser
            //the default for all browsers is GET request.
        //2. post method - used to submit something to a resource
        //3. delete method - deletes something in specified resource
        //4. put method - replace/update something in the target resource
        //5. all method - only exists in express. and not present in HTTP
            //all - accepts any HTTP method. It is listening for any HTTP traffic/request

    //They may look familiar. 
    //They are http verbs and more specifically, they are the REST verbs
    
    //HTTP requests have types/verbs - HTTP get request, HTTP post request, etc
        //This is true for all HTTP requests.

    //CRUD app is analogous to the types of requests
        //get request analogous to READ in CRUD
        //post request analogous to CREATE in CRUD
        //delete request analogous to DELETE in CRUD
        //put request analogous to UPDATE in CRUD
        
    //So app in express has these methods:
        //app.get();
        //app.post();
        //app.delete();
        //app.put();

    //All those methods take 2 arguments:
        //1. the path
        //2. a callback function that runs if HTTP request matches the method and the path

// app.all('/', (req, res) => {
//     res.send(`<h1>Welcome to the homepage~</h1>`)
// });

    //Express routing is meant to handle 2 things - 
        //1. Type of HTTP request 
        //2. The path you actually want to fetch

    //Note:
        //In the event that an HTTP request matches multiple routes we have set up
        //The first res.send that occurs in the code will be the response sent


//If we have 2 get requests to the '/' route, for express to get 
    //to the second get route on line 71, we have to use next()
    //If the first 'get' route on line 66 has a res.send(), the 
    //second get route on line 71 would never run.        
app.get('/', (req, res, next) => {
    console.log(req.route.methods); //logs the method type
    // res.send(`<h1>Welcome to the home GET page~</h1>`);
    next()
});

app.get('/', (req, res) => {
    console.log(req.route.methods); //logs the method type
    res.send(`<h1>Welcome to the home GET page2~</h1>`);
});

app.post('/', (req, res) => {
    res.send(`<h1>Welcome to the home POST page~</h1>`);
});

app.delete('/', (req, res) => {
    res.send(`<h1>Welcome to the home DELETE page~</h1>`);
});

app.put('/', (req, res) => {
    res.send(`<h1>Welcome to the home PUT page~</h1>`);
});

//This route handles all the other pages/routes (that don't exist)
app.all('*', (req, res) => {
    res.status(404)
    res.send('Page not found');
    //Can also just combine res.status() and end()
    //res.status(404).end();
})

app.listen(3000);
console.log('The server is listening on port 3000');

//Postman - is used especially in API development because you need to make a lot of 
    //different HTTP requests