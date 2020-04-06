//Routing - one of the most powerful and useful things in Express

//Two ways to route in Express
    //1. Simple way - use when your project is quite small

    //2. Complex way - using the actual router object
        //Full blown middleware, almost like a mini app inside

const express = require('express');

const app = express();
        
    //app object has many methods:
        //1. get method - meant to ask for a resource/data e.g. enter url in browser
            //the default for all browsers
        //2. post method - used to submit something to a resource
        //3. delete method - deletes something in specified resource
        //4. put method - replace/update something in the target resource
        //6. all method - only exists in express. and not present in HTTP
            //all - accepts any HTTP method. It is listening for any HTTP traffic/request

    //They may look familiar. 
    //They are http verbs and more specifically, they are the REST verbs
    
    //HTTP requests have types - HTTP get request, HTTP post request, etc
    
    //CRUD app is analogous to the types of requests
        //get request analogous to READ in CRUD
        //post request analogous to CREATE in CRUD
        //delete request analogous to DELETE in CRUD
        //put request analogous to UPDATE in CRUD
        
    //So app has these methods:
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

app.get('/', (req, res) => {
    console.log('get request received');
    res.send('get response sent');
});

app.post('/', (req, res) => {

});

app.delete('/', (req, res) => {

});

app.put('/', (req, res) => {

});

app.listen(3000);
console.log('The server is listening on port 3000');