var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails');
//Robert Bunch Reference for this file:
    //https://github.com/robertbunch/justExpress/blob/6eb7aae8805d92ea91d42eba828f8e769777cff4/movieApi/routes/movie.js#L37

/* GET movie page. */
//The '/' route refers to '/movie/...' route

router.get('/', function(req, res, next) {
    console.log('movie router works');
    res.render('index', { title: 'Express' });
});

//Route: GET /movie/movieId
router.get('/:movieId', (req, res, next) => {
    //Note: movieId is pulled out of the URL using req.params
        //Whenever you pull something out of the URL, it will be a 'string' data type
    const movieId = req.params.movieId;

    //Goes through the movieDetails array.
        //For each movie, if the id matches the id from the URL parameter (:movieId)
        //It will return that movie as JSON
        //If no movie matches the provided ID, it will return a
            //JSON message saying 'no movie was found'

    //Array.find() method
        //Built-in JS method
        //Used to get value of first element in an array that 
            //satisfies the provided condition
        
        //If no element satisfies the condition,
            //it returns 'undefined'

    const result = movieDetails.find(movie => {
        //Alternatively, you can do double equals instead of triple equals
            //if (movie.id == movieId) {}
            //If you do double equals, you don't have to convert toString()

                //if (movie.id.toString() === movieId) {
                    //return movie.id === movieId;
            
            //You can also change 'movieId' to a number instead,
                //using the 'Number()' method

                //'return movie.id === Number(movieId)'
            
            //You also don't need to do the 'if' statement
                //You can just do 'return movie.id == movieId'
                //The first 'movie' that satisfies that condition will be returned
            
        return movie.id == movieId;
    })

    //If result is 'undefined'
        //That is, no movie matching the movieId in URL is found
        //We will return JSON saysing the movie ID does not exist
    if (!result) {
        res.json({
            msg: 'Movie ID does not exist'
        });
    } else {
        res.json(result);
    }
});

//Route: GET /movie/top_rated

//Route: POST /movie/movieId/rating

//Route: DELETE /movie/movieId/rating

module.exports = router;



//app.param() notes for review: (We went over this in 6-301 Lessons)

    //app.param() - takes 2 arguments:
        //1. param to look for in the route
        //2. a callback function to run (with an extra argument in it that is the param name)
        
        //app.param() is a way to check if the incomming request has any of the parameters 
            //we have coded for in our express server
            //If it does, we can have extra logic to handle it in app.param()

        //For example, you have 3 routes with a parameter ':uid'
            //app.get('/user/:uid'...);
            //app.get('/user/admin/:uid'...);
            //app.get('/user/profile/:uid'...);
        //You can use app.param('uid', ()) to distinguish between the 3 routes
            //if a route with ':uid' is encountered by the server    

    //So, express server will check if the route has ':storyId' in it
        //app.param('storyId', (req, res, next, storyId) => {
            //console.log('Params called:', storyId);

            //if storyId has something to do with X, then do something here...

            //else if storyId has something to do with Y, then do something here...

            //without 'next()', the middleware process will stop
            //next();
        // });