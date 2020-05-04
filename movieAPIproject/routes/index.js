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

  if (req.query.api_key !== apiKey.key) {
    res.json("Invalid API Key");
  } else {
    //'results' will contain the movies where the most_popular property value is true
    const results = movies.filter(movie => movie.most_popular);
    res.json(results);

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
