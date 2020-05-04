//The functionality and specs we are trying to emulate with this route
  // https://developers.themoviedb.org/3/movies/get-now-playing

  //The specs require the user to provide an api key
    //whenever they are making an API request
  //The specs have an optional parameter - page
var express = require('express');
var router = express.Router();
const apiKey = require('../apiKey');

//Bring in the movies data from movies.js in data folder
  //It is importing an array of objects
  //Each object is a movie
  //So our const movies - is an array data structure
const movies = require('../data/movies');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index router works');
  res.render('index', { title: 'Express' });
});

router.get('/most_popular', (req, res, next) => {
  //get the page variable from the query string
    //This particular URL parameter will be optional
    //The API key parameter will be required
  
  let page = req.query.page;
  
  //Since page query string is optional, if no page number is given, 
    //set page to 1. 
    //That is, we start on the first page of results.
    //We do not set page to zero, because then, no results will come back
    //Note: 1 page contains 20 elements 
  if (page === undefined) {
    page = 1;
  }

  if (req.query.api_key !== apiKey.key) {
    res.json("Invalid API Key");
  } else {
    //'results' will contain the movies where the most_popular property value is true
    let results = movies.filter(movie => movie.most_popular);

    //Note: 1 page contains 20 elements
    //We take a portion of the entire results array.
      //Remember, results array contains a bunch of objects.
      //Each object is a movie.
      //If the user asks for the results starting from the first page, indexToStart will be 0
        //Then indexToEnd will be 19
      //We slice the results array to create a new array with the first 20 movies

    //If user wants to start on page 3
      //indexToStart will be (3 - 1) * 20 = 40
      //indexToEnd will be 40 + 19 = 59
      //So slice will take the index range from 40 to 59 in the results array 

    //indexToStart to indexToEnd will return 20 movies
    const indexToStart = (page - 1) * 20;
    const indexToEnd = indexToStart + 19;
    results = results.slice(indexToStart, indexToEnd);

    //Notes on slice(start, end) method:
      //The first argument and second argument are optional.
        //'start' is an integer that represents the index to start from in the array.
        //If omitted, it acts as '0'.
        //'end' is is an integer that represents the index to end in the array.
        //If omitted, all elements from the start parameter to the end of the array will be included.
      //The slice() method returns the selected elements in an array, as a new array object.
      //The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
      //The original array will not be changed.


    // {results} in ES6 is equivalent to {results: results}
    res.json({
      //You can fill in properties here, like result_number: results.length
      //All these properties will be included in the json we send to the user in the response
      page,
      result_number: results.length,
      results
    });

    /* 
    Using a 'forEach' instead of a 'filter' method

    let movieList = [];
    const results = movies.forEach(movie => {
      if (movie.most_popular) {
        movieList.push(movie);
      }
    });
    res.json(movieList);
    */
  }
});

module.exports = router;

// Keyboard shortcut 
  //ctrl + shift + k - Delete a line of code
