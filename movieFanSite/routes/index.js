var express = require('express');
var router = express.Router();
const request = require('request');

const apiKey = require('../apiKey');
//api docs here:
  //https://developers.themoviedb.org/3/getting-started/introduction

const apiBaseUrl = 'http://api.themoviedb.org/3'; 
//This will be used for every REST api request we are going to make

const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey.key}`;
//This will fill out the main page with current movies

const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';
//Images come from this url
//'w300' in the URL is for the width of the image
  //e.g. 'w300' means width of 300 pixels
  //e.g. 'w100' means width of 100 pixels

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  //we add imageBaseUrl to res.locals so all middleware can access it
  next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
  //We will use the request module to pull our data from an API
    //The request module will make an HTTP request
    //request module has all the HTTP verbs we are used to (GET/POST/PUT/etc)

  //request.get takes 2 arguments:
    //1. The URL to perform the HTTP GET request on
    //2. The callback function to run when HTTP response comes back from API server
  
  //The callback function takes 3 arguments:
    //1. error (if any) - will be NULL if no error
    //2. HTTP response - entire HTTP response
    //3. JSON/data - the server sent back

  //request get request is ASYNCHRONOUS - so we may have to set up a promise chain
  //The request module will make a GET request to nowPlayingUrl
    //Callback function will run once HTTP response from the API comes back
  //request vs async/await with axios vs promises??
  request.get(nowPlayingUrl, (error, response, movieData) => {
    // console.log('---------The error--------');
    // console.log(error);
    // console.log('---------The response--------');
    // console.log(response);
      //When you look through the response the movie API server sends back to us
        //the body is actually a very long string (that looks like an object)
        //Even though it is an object-looking format, 
        //data across an HTTP message always comes back as a STRING
        //We used JavaScript to make the request and we're going to use JavaScript to process the request
      
    // console.log(movieData); 
      //movieData is the same as response.body
      //It is a long-ass string that contains the newest movies in theatres

    const parsedData = JSON.parse(movieData);
      //We have to parse the data because 'movieData' comes back as an HTTP message (a string)
      //Instead of JSON.parse(movieData), JSON.parse(response.body) would be the same thing
      //The response object is still useful because it contains the headers and everything else
      //JSON.parse() will return a JavaScript object
      //JSON.parse() converts the string into a JavaScript object

    // res.json(parsedData);
      //renders the JSON in our web browser

    //The structure of the response.body object is an object called 'results'
      //The value of results is an array 
      //Inside the array are a bunch of objects
      //Each object is a movie
      //Each object has a property called - 'poster_path'
        //which gives the URL for the poster image of the movie

    //We will render the index.ejs and pass into it the parsedData.results (which is an array data structure)
    //Recall, the object we pass into res.render() will be appended to res.locals
    //So in this case, it will be res.locals.parsedData
    //parsedData.results refers to the only property in parsedData that we care about
      //there are other properties after 'results' that we don't care about
    res.render('index', {
      parsedData: parsedData.results
    });
    
  })
});

// /movie/:id is a wildcard route
  //So the ':id' will be stored in 'req.params.id'
router.get('/movie/:id', (req, res, next) => {
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${apiKey.key}`
  // res.send(thisMovieUrl);
  request.get(thisMovieUrl, (error, response, movieData) => {

    //We have to parse the data with JSON.parse() because 'movieData' comes back as an HTTP message (a string)
    const parsedData = JSON.parse(movieData);
    console.log(parsedData);
    res.render('single-movie', {
      parsedData: parsedData
      //With es6, if key and value is the same, you can just write the key 'parsedData' in this case
        //Instead of writing 'parsedData: parsedData'
    });
  });
});

router.get('/error', (req, res, next) => {
  res.send('404 page does not exist');
});

module.exports = router;