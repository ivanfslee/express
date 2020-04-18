const path = require('path');

const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/login', (req, res, next) => {
    res.render('login');
});

app.post('/process_login', (req, res, next) => {
    res.render('welcome');
});

app.listen(3000);
console.log('Server is listening on port 3000');

//Git: Revert to a Previous Commit
    // https://stackabuse.com/git-revert-to-a-previous-commit/
    //Get hash-or-ref from github
        //git reset --hard <hash-or-ref>

//Create 'package.json' file
    //npm init