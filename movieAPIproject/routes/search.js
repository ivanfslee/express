var express = require('express');
var router = express.Router();

const movies = require('../data/movies');
const people = require('../data/people');

/* GET search page. */
// '/' route refers to '/search/...' route
router.get('/', function(req, res, next) {
    console.log('search router works');
    res.render('index', { title: 'Express' });
});

//The 2 defined routes in this router:
    //Route: GET /search/movie

    //Route: GET /search/person

// GET route to search for movie - /search/movie
router.get('/movie', (req, res, next) => {
    const searchTerm = req.query.q;
    const results = movies.filter(movie => {
        return movie.title.includes(searchTerm);
    });
    res.json({results});
});

// GET route to search for person - /search/person
router.get('/person', (req, res, next) => {
    const searchTerm = req.query.q;
    const results = people.filter(person => {
        return person.name.includes(searchTerm);
    });


    res.json({results});
});
module.exports = router;