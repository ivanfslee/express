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
  request.get()
  res.render('index', { });
});

module.exports = router;

