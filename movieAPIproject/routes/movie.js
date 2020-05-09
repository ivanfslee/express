var express = require('express');
var router = express.Router();

const movieDetails = require('../data/movieDetails');
//Robert Bunch Reference for this file:
    //https://github.com/robertbunch/justExpress/blob/6eb7aae8805d92ea91d42eba828f8e769777cff4/movieApi/routes/movie.js#L37

function isJson(req, res, next) {
    //Note: if no body is sent in the HTTP request, 
        // !req.is('application/json') will evaluate to 'null'
        //So, we must include a body in our HTTP request (in postman)
    if (!req.is('application/json')) {
        res.json({msg: 'Content-type must be application/json'})
    } else {
        next();
    }
}

router.param('movieId', (req, res, next) => {
    //Update the database with analytics data
        //or any other logic that will run when
        //a route with param 'movieId' is hit

    //Another example -
        //If only certain api_keys are allowed to use 'movieId' routes
        //That validation logic would go here

    console.log('Someone hit a route that uses the movieId parameter/wildcard');
    next();
});

/* GET movie page. */
//The '/' route refers to '/movie/...' route
router.get('/', function(req, res, next) {
    console.log('movie router works');
    res.render('index', { title: 'Express' });
});

//The following 4 routes:
    //Route: GET /movie/top_rated

    //Route: POST /movie/movieId/rating

    //Route: DELETE /movie/movieId/rating

    //Route: GET /movie/movieId



//Route: GET /movie/top_rated
router.get('/top_rated', (req, res, next) => {
    //We will use movieDetails.js 
    //Each movie has a property called 'vote_average'
    // We will sort based on that property value
    //in groups of 20, because we have defined that each page
    //of movie results contains 20 movies

     let page = req.query.page;
     if (page === undefined) {
         page = 1;
     }

    //sort algo is quick sort or merge sort
     //Sort based on vote_average - descending
    let results = movieDetails.sort((a, b) => {return b.vote_average - a.vote_average});

    const indexToStart = (page - 1) * 20;
    const indexToEnd = indexToStart + 19;
    res.json(results.slice(indexToStart, indexToEnd));
});

//Route: GET /movie/movieId
//This route must go after the other routes that match /movie/<anything>
//That is because this is a wildcard route
//So, the /top_rated route matches /:movieId route, which 
    //is not what we want
//So, 'top_rated' route must go before this '/:movieId' route
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

//Route: POST /movie/:movieId/rating
router.post('/:movieId/rating', isJson, (req, res, next) => {

    //Rating from the user will come from req.body.rating,
        //not a query string (req.query.rating)
        //The rating is coming from a post request 
    const rating = req.body.rating;
    console.log('req.body.rating is:', req.body.rating);

    //Here, we use req.get() to get the content-type of the request
    console.log(req.get('content-type'));
    
    console.log('req.body.rating type is:', typeof req.body.rating);
    if (rating < .5 || rating > 10) {
        res.json({msg: 'Rating must be greater than .5 and less than 10'});
    } else {
        res.json({
            msg: 'Rating submitted!',
            // status_code: 200
        });
    }
});

//Route: DELETE /movie/:movieId/rating
router.delete('/:movieId/rating', isJson, (req, res, next) => {
    res.json({msg: 'Rating deleted!'});
});

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