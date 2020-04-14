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

//In order to use res.render() - the process is as follows:
    //1. Express as we know it happens. This file. build express, build our routes and our middleware, etc
    //2. We define a view engine.
        //View engine examples:
        //EJS
        //Mustache
        //Handlebars
        //Jade/Pug

app.listen(3000);
console.log('Server is listening on port 3000');