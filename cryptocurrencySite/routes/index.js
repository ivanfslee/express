var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  const cryptoGlobalUrl = 'https://api.coinpaprika.com/v1/global';
  request.get(cryptoGlobalUrl, (error, response, marketData) => {
    const parsedData = JSON.parse(marketData);
    // console.log(parsedData);
    
    // res.json(parsedData);
      //will render just the JSON to the browser

    res.render('index', {  
      parsedData: parsedData
    });
  });
});

router.post('/search', (req, res, next) => {
  const apiSearchUrl = `https://api.coinpaprika.com/v1/search/?q=${req.body.coinSearch}`
  request.get(apiSearchUrl, (error, response, apiData) => {
    const parsedData = JSON.parse(apiData);
    res.json(parsedData);
  });
})

module.exports = router;
