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

app.get('/', (req, res, next) => {
    res.render('index');
});

//9:00
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