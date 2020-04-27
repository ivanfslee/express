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
  request.get(nowPlayingUrl, (error, response, movieData) => {
    console.log('---------The error--------');
    console.log(error);
    console.log('---------The response--------');
    console.log(response);
  })
  res.render('index', { });
});

module.exports = router;