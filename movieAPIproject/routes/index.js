var express = require('express');
var router = express.Router();

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

});

module.exports = router;

// Keyboard shortcut 
  //ctrl + shift + k - Delete a line of code
