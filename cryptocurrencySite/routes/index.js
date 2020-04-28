var express = require('express');
var router = express.Router();
const request = require('request');
const cryptoGlobalUrl = 'https://api.coinpaprika.com/v1/global';

/* GET home page. */
router.get('/', function(req, res, next) {
  request.get(cryptoGlobalUrl, (error, response, marketData) => {
    const parsedData = JSON.parse(marketData);
    console.log(parsedData);
    
    // res.json(parsedData);
      //will render just the JSON to the browser

    res.render('index', {  
      parsedData: parsedData
    });
  });
});

module.exports = router;
