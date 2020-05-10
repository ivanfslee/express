var express = require('express');
var router = express.Router();

const movies = require('../data/movies');
const people = require('../data/people');

//This middleware will check if the user
    // provided a query string
function queryGiven(req, res, next) {
    console.log('req.query is: ', req.query);
    if (!req.query.q) {
        res.json({msg: 'query must be provided'})
    } else {
        next();
    }
}

//We apply the middleware to every route
    //in this router, using router.use()
router.use(queryGiven);


//The 2 defined routes in this router:
    //Route: GET /search/movie

    //Route: GET /search/person

// GET route to search for movie - /search/movie
router.get('/movie', (req, res, next) => {
    //Movie API says that the search term should be URI encoded
    //URI = uniform resource identifier
    //This is to handle different languages and spaces in the search term
    //You encode the search term to normalize it
    //For example, ' ' spaces in the search term will show up as '%20' in the URL

    const searchTerm = encodeURI(req.query.q).toLowerCase();
    const results = movies.filter(movie => {
        return movie.title.toLowerCase().includes(searchTerm) || movie.overview.toLowerCase().includes(searchTerm);
    });
    res.json({results});
});

// GET route to search for person - /search/person
router.get('/person', (req, res, next) => {
    //Movie API says that the search term should be URI encoded
    //URI = uniform resource identifier
    //This is to handle different languages and spaces in the search term
    //You encode the search term to normalize it
    //For example, ' ' spaces in the search term will show up as '%20' in the URL
    const searchTerm = encodeURI(req.query.q);
    const results = people.filter(person => {
        return person.name.toLowerCase().includes(searchTerm);
    });
    res.json({results});
});

module.exports = router;