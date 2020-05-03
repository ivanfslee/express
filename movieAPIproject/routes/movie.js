var express = require('express');
var router = express.Router();

/* GET movie page. */
// '/' route refers to '/movie/...' route
router.get('/', function(req, res, next) {
    console.log('movie router works');
    res.render('index', { title: 'Express' });
});

module.exports = router;