//In routerApp.js, we are going to put our application
    //This is going to be the main express server

//In theRouter.js, that is where the router lives
    //This is where we are going to handle all our routes

//This is our router file
    //but we still need to require('express');
    //Because this is a different file, so we need the 'express' module
    //We need 'express' because we use 'express.Router()' (line 14)

const express = require('express');

let userRouter = express.Router();
    //'let' is the ES6 version, we use 'let' instead of 'var'
    //express.Router() creates a new router object
    //express.Router() acts the same way as the 'app' router does
    //The only difference is that it is specific to this router

    //Instead of app.get(X), we will use router.get(x)
        //app.get(X)  and  router.get(X) will do the same thing
        //router.get(X) is made specifically for this purpose
        //app.get(X) can do anything

//To access the '/user' route in our browser, we go to:
    //localhost:3000/user1/user
    //The '/user1' comes from 'routerApp.js'
    //Our root route for this 'userRouter.js' is defined in 'routerApp.js'
    //And in this case, we define the root route as '/user1'
    
    //If we just want to access the '/user' route in our browser as:
        //localhost:3000/user
        //In routerApp.js our root route for userRouter.js should be '/user'
        //And the path in 'userRouter.js' should be '/' instead of '/user'

userRouter.get('/user', (req, res, next) => { 
    res.json({
        msg: 'User Router Works!'
    });
});

//we export the router object so other files can use it 
    //We will import/require the 'router' into 'routerApp.js'
module.exports = userRouter; 