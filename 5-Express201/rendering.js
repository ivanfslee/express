//Rendering Engines

const path = require('path');
const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());

//serve up static files from 'public' folder
app.use(express.static('public')); 

//parse json and urlencoded data into req.body
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));

//app.set assigns a 'name' to 'value'
//You can store any value you want, but certain names can be used to configuire the behavior of the server
    //Special names in the documentation at expressjs.com
    //A special name we are interested in is 'view engine'
    //By default, the 'view engine' is undefined
    //So, we have to define the engine we want to use
//app.set() will take 2 arguments
    //1. key/name
    //2. value

//Essentially, we are setting our 'view engine' to 'ejs'
app.set('view engine', 'ejs');

//11:39

app.get('/', (req, res, next) => {
    res.render('index');
});

//res.render() process
//In order to use res.render() - the process is as follows:
    //1. Express as we know it happens. This file. build express, build our routes and our middleware, etc
    //2. We define a view engine. We need to decide what to use.
        //View engine examples:
            //EJS
            //Mustache
            //Handlebars
            //Jade/Pug
    //3. Inside one of our rotes, we have a res.render()
    //4. We pass that res.render 2 things:
        //First Thing - the file we want to use. The file is either a EJS file, mustache file, pug file, or handlebars file, or whatever file that our view engine uses
        //Second Thing - the data we want to send to that file.
            //Essentially, the view engine is between nodeJS and the front-end stuff
            //res.locals - is used to store any data that we want to send to the template
            //Then the template engine can fill out the HTML accordingly
    //5. Express uses the node module for our specified view engine and parses the file
        //That means, it takes the HTML/JS/CSS and combines it with whatever 'node module' there is in the file
    //6. The final result of this process is a compiled product of the things the browser can read (mainly, HTML/CSS/JS)

app.listen(3000);
console.log('Server is listening on port 3000');