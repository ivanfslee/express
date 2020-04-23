//In routerApp.js, we are going to put our application
    //This is going to be the main express server

//In theRouter.js, that is where the router lives
    //This is where we are going to handle all our routes

//This is our router file
    //but we still need to require('express');
    //Because this is a different file, so we need the 'express' module
    //We need 'express' because we use 'express.Router()' (line 14)

const express = require('express');

let router = express.Router();
    //'let' is the ES6 version, we use 'let' instead of 'var'
    //express.Router() creates a new router object
    //express.Router() acts the same way as the 'app' router does
    //The only difference is that it is specific to this router

    //Instead of app.get(X), we will use router.get(x)
        //app.get(X)  and  router.get(X) will do the same thing
        //router.get(X) is made specifically for this purpose
        //app.get(X) can do anything

router.get('/', (req, res, next) => {
    res.json({
        msg: 'Router Works!'
    });
});

//Other available router methods include the usual suspects:
    //router.use()
    //router.all()
    //router.post()
    //router.delete()
    //router.put()
    //etc
    //These are all available as they would be for 'app' (app.post(), app.delete(), etc)

    //router.use() - works the same way as app.use() does
        //Except it is specific to this router
    
//we export the router object so other files can use it 
    //We will import/require the 'router' into 'routerApp.js'
module.exports = router; 