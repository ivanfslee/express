var express = require('express');
var router = express.Router();

/* GET search page. */
// '/' route refers to '/search/...' route
router.get('/', function(req, res, next) {
    console.log('search router works');
    res.render('index', { title: 'Express' });
});

module.exports = router;