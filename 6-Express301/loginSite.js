const path = require('path');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//cookieParser - new 3rd party middle we are using
//creates and stores cookies into 'req.cookies' object
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/login', (req, res, next) => {
    res.render('login');
});

app.post('/process_login', (req, res, next) => {
    //How we coded this route:
        //When user submits the form from login.ejs, it sends a post request to '/process_login' route
        //We have no:
            //res.render()
            //res.send()
            //res.json()
            //in this '/process_login' route
        //Instead, our route redirects the user to other routes in our express server
            //using 'res.redirect()'
            //We redirect them to '/welcome' or '/login'
        
    //The post route to '/process_login' is to assess the user submitted data
        //and send user to the appropriate route after that
        //The route does not serve any particular ejs or json data
        //Recall that 'post' routes receive user-submitted data

    // res.json(req.body);
    //Recall: 'req.body' property is made by express.urlencoded() middleware
        //It will parse the HTTP message for any data inside it
        //The data will be mirrored in req.body property
        //req.body will have a property of 'username' and 'password' which is from login.ejs
        //The two input fields of login.ejs have 'name="username"' and 'name="password"'
        //Those 'name' end up as properties in req.body

        //In login.ejs the form is sending data to our express server
            //One piece of data is 'username'
            //Another piece of data is 'password'
    
    //get password and username from req.body
    const password = req.body.password;
    const username = req.body.username;

    //Check database to see if user credentials are valid
        //Oauth
        //Some other algorithm to check this, goes here
    
    //If user credentials are valid:
        //Save their username in a cookie, then send user to welcome page
        //You could do this using sessions as well
        //Difference between cookie vs. sessions
            //Cookie data is stored entirely on browser
                //Browser will send it to the server, every time a request is made
                //Cookies are included with express, so we will use that here
            //Session data is stored on the server
                //Browser is given essentially, a key for that data
                //Sessions is not included with Express
            //tokens or local data are valid alternatives as well
    if (password === 'x') {
        //res.cookie() takes 2 arguments:
            //1. name of the cookie
            //2. value to set it to

        //User submits form (login.ejs) -> express.urlencoded() appends form data username and password to req.body
            //we create a cookie out of the 'username' property of req.body
        
        //We store it in a cookie, so we can access the cookie on any page
        //We don't need need to remember it because if the user comes back,
        //we won't have access to req.body anymore
        //We are able to identify the user by the cookie
        //This is because after this /process_login route, we send the user to the 'welcome' page
        //And recall that HTTP is stateless, so the req.body.username and req.body.password will be gone or will contain different data
        //Because HTTP is stateless, each request/response is independent of other requests/responses
        
        //res.cookie
            //response object sets cookies
        res.cookie('username', username);

        //res.redirect takes 1 argument:
            //res.redirect() makes a 'GET' request
            //1. Where to send the browser
        res.redirect('/welcome');

        //We have another option with res.render();
            //We can render the welcome.ejs
        // res.render('welcome');
    } else {
        //'?' question mark in the route indicates a 'query string'
        res.redirect('/login?msg=fail')
    }
});

app.get('/welcome', (req, res, next) => {
    //req.body.username will be empty because this is a new http request
    //req.cookies object will have a property for every named cookie that has been set

    //Note: res.cookie - is singular - because you are setting one cookie at a time
        //req.cookies - is plural because you may have many cookies

    res.render('welcome', {
        //We set req.cookies.username (line 92) with res.cookie('username', username)
        username: req.cookies.username
    });
});

app.listen(3000);
console.log('Server is listening on port 3000');

//Git: Revert to a Previous Commit
    // https://stackabuse.com/git-revert-to-a-previous-commit/
    //Get hash-or-ref from github
        //git reset --hard <hash-or-ref>

//Create 'package.json' file
    //npm init