//request -> Node/express server -> produces HTML/CSS/JS response

//responses we have done so far:
    //1. res.send()
    //2. res.sendFile() 
        //express.static() is similar to res.sendFile, but express.static() can serve up entire front-end static websites inside express

//The responses always end up with sending an HTML/CSS/JS response
    //because browsers are on the other end of the response
    //and browsers mainly read HTML/CSS/JS

//Because of this, express' goal is always to get to HTML/CSS/JS somehow
    //To either:
        //1. send json back using res.json()
        //2. or actually send a front-end product - HTML/CSS/JS

//We can have a dynamic website even wit just HTML/CSS/JS
    //The javascript using AJAX, can go out and fetch data
    //or use a router, using vue/angular/react/ etc
    //These all can create a dynamic website, but it's still going to be static code. 

//What if, instead of using JS to manipulate the DOM, 
    //what if we actually wrote the DOM the way we wanted it from the beginning
    //so when the response is sent out, it shows up front the correct way
    //JS would not need to be involved because we wouldn't need that extra step.

    //In order for the information to be correct and we're not using JS
        //we need somthing that speaks both express and front-end
        //This is what the template engine does

//Request comes in and reaches express server
//express server does its thing
//before the response goes out, 
    //We send the template, data from express
    //The template will build HTML/JS/CSS for us
    //and it will then take that final product and send it back out the response

//So template engine's job is to marry node with the front-end
    //So that, what we get in the end, is that, instead of being a static front-end site
    //we have a dynamic front-end site where we can build the DOM based on nodeJS.

//Template engine (ejs file/pug file/mustache file/etc) essentially builds the DOM based on data it gets from node/express server
    //before it gets sent out as a response
    //It won't have a great ui like using a front-end framework or library like vue/react
    //but ejs does have some benefits

//Node/express server -> template engine -> Front-end HTML/CSS/JS



//Entire EJS Process:
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
        //5. Express uses the node module for our specified view engine (EJS in this example) and parses the file.
            //Parsing the file means, translating. It will take some express, and some HTML/CSS/JS and create a final product of things the browser can read (HTML/CSS/JS)
            //That means, it takes the HTML/JS/CSS and combines it with whatever 'node module' there is in the file
        //6. The final result of this process is a compiled product of the things the browser can read (mainly, HTML/CSS/JS)
        //7. Then the response is sent out.

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

app.set('view engine', 'ejs'); //'hbs' for handlebars view engine, 'pug' for pug view engine

//app.set has another special name available to it called 'views'
//It is a string or array - and is a directory or an array of directories for the application's views.
app.set('views', path.join(__dirname, 'views')); //__dirname is the current directory name


//4. We pass that res.render 2 things:
    //First Thing - the file we want to use. The file is either a EJS file, mustache file, pug file, or handlebars file, or whatever file that our view engine uses
    //Second Thing - the data we want to send to that file (typically, the data is in JSON format)
        //Data should be JSON format, because it will be appended to res.locals
        //Essentially, the view engine is between nodeJS and the front-end stuff
        //res.locals - is used to store any data that we want to send to the template
        //Then the template engine can fill out the HTML accordingly
//5. Express uses the node module for our specified view engine (EJS in this example) and parses the file.
    //Parsing the file means, translating. It will take some express, and some HTML/CSS/JS and create a final product of things the browser can read (HTML/CSS/JS)
    //That means, it takes the HTML/JS/CSS and combines it with whatever 'node module' there is in the file
//6. The final result of this process is a compiled product of the things the browser can read (mainly, HTML/CSS/JS)
//7. Then the response is sent out.

app.get('/', (req, res, next) => {
    //The data, in the second argument, is going to be appended to res.locals
    res.render('index', {
        msg: 'Success!'
    }); //It will look for index.ejs file in our '/views' directory and render it
});

app.listen(3000);
console.log('Server is listening on port 3000');


//EJS tags
    // <% means to run javascript
    // <%= means to just print to DOM/HTML
    // <%# ejs comment tag 
