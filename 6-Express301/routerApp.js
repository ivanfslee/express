//express.Router()
    //It is almost like a micro-services architecture inside your express app
    //Router method is essentialy a little mini application 
        //inside of our express app
    //It's only job is to handle middleware and handle routes
    //It behaves like middleware, but its a really nice way to modularize your app
        //So that our app.get()/app.post()/ etc. All of them will be contained in the router.
        //This allows for modularity and organization and easier coding and maintainence

    //The router makies it easy to modularize and put all the routes and middleware in a different file.

//In routerApp.js, we are going to put our application
    //This is going to be the main express server

//In theRouter.js, that is where the router lives
    //This is where we are going to handle all our routes

const express = require('express');
const app = express();
const helmet = require('helmet');


//These pieces of middleware - helmet/urlencoded/json/static will have their chance
    //at modifying the 'req' and 'res' object before anyone else does
    //That is, they are at the top of the file, at the application level
app.use(helmet());
app.use(express.urlencoded({extended:false}));
app.use(express.json()); //3:30 time stamp - he's not sure if we need this, but he's including it
app.use(express.static('public'));

//We will not include a view engine
    //We are going to do API style and respond with JSON

//Typically the routes would be here, but this time, we will
    //have the routes in 'theRouter.js'
    //We will import our routes from 'theRouter.js'
const router = require('./theRouter'); //9:00 timestamp
const userRouter = require('./userRouter');

//This line is just like usual middleware implementations
    //At path '/', I want you to use 'router' which contains our routes
    //and is imported from 'theRouter.js'
app.use('/', router);
app.use('/user1', userRouter);

//The upshot to this structure is that each set of routes can have their own router:
    //e.g. you could have multiple router files serving up a different group of routes
        //You could have 3 different main routes for root url ('/'),
            //another group of routes for administrators ('/admin')
            //another group of routes for users ('/user')
            //And they could each have their own router file
        //app.use('/', router);
        //app.use('/admin', adminRouter);
        //app.use('/user', userRouter);

app.listen(3000);
console.log('Server is listening on port 3000');