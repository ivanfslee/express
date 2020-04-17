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

//Let's write a piece of middleware
function validateUser(req, res, next) {
    //Other validating logic goes here...
    //We add a 'validated' property to res.locals
    res.locals.validated = true;
    //Our ejs file has access to res.locals, so it can access res.locals.validated there too
    next();
}

//We run validateUser middleware on every path/incoming request:
    //Which means that every path will have access to res.locals.validated
    //Which also means all our view files (ejs files) have access to res.locals
app.use(validateUser);

//About page route
app.get('/about', (req, res, next) => {
    res.render('aboutPage', {}); //We are not serving any data, so we can have an empty object as the second argument
});

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
    //res.render will look for index.ejs file in our '/views' directory and render it
    //We also place a base64 encoded image as the value for key 'html'
    res.render('indexHomePage', {
        msg: 'Success!',
        msg2: 'Failure!',
        //Let's say HTML came from the database and we want to drop it in the ejs template
        html: `<p><img src="data:image/jpeg;base64,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" /></p>`
    });
});

app.listen(3000);
console.log('Server is listening on port 3000');

//EJS tags
    // <% means to run javascript
    // <%= means to just print to DOM/HTML
    // <%# ejs comment tag