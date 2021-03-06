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
    //Parses 'Cookie' header and populates 'req.cookies' with an object keyed by the cookie names
    // https://expressjs.com/en/resources/middleware/cookie-parser.html
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    // console.log('res.locals is: ', res.locals); 
    if (req.query.msg === 'fail') {
        //we want to set a local variable that the view engine will
        //be able to see. 
        //The view engine and every piece of middleware has access to 'res.locals'
        //So we use 'res.locals' to set a message

        //We create a 'msg' property in 'res.locals'
            //and set it to an error message
            //We will pass 'res.locals.msg' into our login.ejs file
            //So that the value can be displayed
        res.locals.msg = 'Sorry. This username and password combination does not exist.'
    } else {
        //We will pass 'res.locals.msg' into our login.ejs file
        //So that the value can be displayed
        res.locals.msg = '';
    }

    //res.locals.msg
        //Above, we create an 'msg' property in 'res.locals'
        //If the query string with key 'msg' has a value of 'fail'
        //We store an error message into 'res.locals.msg'
        //Otherwise, we set 'res.locals.msg' to an empty string

    //Send request on to the next piece of middleware
    next();
});

app.get('/login', (req, res, next) => {
    //req.query
        //The req object has a query property in Express
        //req.query is an object that has the property of every key/value pair in the query string in the URL
        //It is easy for the browser and server to pull stuff out of the URL if it needs to
    console.log(req.query);
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
            //res.cookie is built into expressjs
            //Sets a cookie with key and value
            //To clear the cookie from the user's browser,
                //you use res.clearCookie(key)
                // to clear the cookie by passing in the key of the cookie
            //From express documentation (https://expressjs.com/en/api.html)
                //res.cookie(name, value [,options])
                //Sets 'cookie' name to value        
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
        //The '?' is a special character in a URL
            //Everything after the '?' is part of the query string
                //Typically in key/value format
                //In this example 'msg=fail'
            //Everything before the '?' is part of the actual path of the domain
            //The web server will not care about everything after the '?'
                //That is because it is not part of the actual path to get to this page

            //For multiple pairs in the query string:
                //use an '&'
                //Two pairs in the following example:
                    //'/login?msg=fail&test=hello'
                    //  'msg=fail' and 'test=hello'
        res.redirect('/login?msg=fail&test=hello');
    }
});

app.get('/welcome', (req, res, next) => {
    //req.body.username will be empty because this is a new http request
    //req.cookies object will have a property for every named cookie that has been set

    //Note: res.cookie - is singular - because you are setting one cookie at a time
        //req.cookies - is plural because you may have many cookies

    res.render('welcome', {
        //We set req.cookies.username (line 101) with res.cookie('username', username)
        //req.cookies object is made possible by the 'cookie-parser' middleware
        //'cookie-parser' middleware parses 'Cookie' header 
        //and populates req.cookies with an object keyed by the cookie names
        username: req.cookies.username
    });
});

//app.param() - takes 2 arguments:
    //1. param to look for in the route
    //2. a callback function to run (with an extra argument in it that is the param name)
    
    //app.param() is a way to check if the incomming request has any of the parameters 
        //we have coded for in our express server
        //If it does, we can have extra logic to handle it in app.param()

    //For example, you have 3 routes with a parameter ':uid'
        //app.get('/user/:uid'...);
        //app.get('/user/admin/:uid'...);
        //app.get('/user/profile/:uid'...);
    //You can use app.param('uid', ()) to distinguish between the 3 routes
        //if a route with ':uid' is encountered by the server    

//So, express server will check if the route has ':storyId' in it
app.param('storyId', (req, res, next, storyId) => {
    console.log('Params called:', storyId);

    //if storyId has something to do with X, then do something here...

    //else if storyId has something to do with Y, then do something here...

    //without 'next()', the middleware process will stop
    next();
});



//This solution of having 3 routes that all do the same thing, is not ideal
    //These 3 routes could be replaced by:
        //1. res.render() - render a view
        //2. res.json() - to a frontend framework/library e.g. vue or react
        //3. req.params object - built into express 

        // app.get('/story/1', (req, res, next) => {
        //     res.send('<h1>Story 1</h1>');
        // });

        // app.get('/story/2', (req, res, next) => {
        //     res.send('<h1>Story 2</h1>');
        // });

        // app.get('/story/3', (req, res, next) => {
        //     res.send('<h1>Story 3</h1>');
        // });

//In a route, anytime something has a ':' in front of it is a wildcard
    //Wildcard will match anything in that slot
    //e.g. '/story/:storyId' - would match '/story/sdlfjsdl234234fj'
    //e.g. '/story/:storyId' - would match '/story/anything'
    //e.g. '/story/:storyId' - would match '/story/anyValueHere' 

app.get('/story/:storyId', (req, res, next) => {
    //req.params object always exists (it is part of express)
    //req.params object is built inside of express
    //req.params will have a property for each wildcard in the route

    //For this route, you can access ':storyId' value
        //through 'req.params.storyId'
    res.send(`<h1>Story ${req.params.storyId}</h1>`)
});

app.get('/story/:storyId/:link', (req, res, next) => {
    //For this route, you can access ':storyId' value
        //through 'req.params.storyId'
    
    //You can access the ':link' value 
        //through 'req.params.link'
    res.send(`<h1>Story ${req.params.storyId} - ${req.params.link}</h1>`)
});

//This '/statement' path will send the user their banking statement
//Because it is sensitive and financial information, we CANNOT put the statement in 'public'
//Because files in the 'public' folder can be accessed by anyone
app.get('/statement', (req, res, next) => {
    //res.sendFile() will load up the image in the browser
        //which is not necessarily what we want
    // res.sendFile(path.join(__dirname, 'userStatements/BankStatementChequing.png'));

    //Instead we can use the 'download' method
    //app has a 'download' method. It takes 2 arguments:
        //1. filename
        //2. optional argument - what you want the filename to download as
        //3. optional 3rd argument - callback function that runs, if an error has occured with sending the file
    const currentDate = new Date;

    //Note: you may have to open up your developer console in chrome, 
        //right click on the reload icon at the top left of the browser
        //and click on 'empty cache and hard reload'
        //Otherwise, the browser will reload the image in the browser again
    
    //If done correctly, res.download() will serve up the file by opening a dialog box
        //asking you to save the file on your local computer
    
    //In the response headers, res.download() will add a new property in the header
        // called 'Content-Disposition' which indicates the file file is an 'attachment'
        //Under the hood, res.download will set the 'Content-Disposition' header
        //And it will also use res.sendFile() to transfer the file to your machine

        //When the browser sees the 'Content-Disposition' header, this tells it to download the file
        //instead of rendering the file in the browser

        //With res.sendFile(), there is no 'Content-Disposition' header
        //So the browser just renders the image in the browser
        //Once the browser gets the 'Content-Disposition' header, it will know what to do
            //It will commence the downloading of the file on the user's machine

        //res.download() sets the headers
            //1. It sets 'Content-Disposition' to 'attachment' with a filename of the 2nd argument (if it is provided)
    res.download(path.join(__dirname, 'userStatements/BankStatementChequing.png'), `JimsStatement_${currentDate}.png`, (error) => {
        //if there is an error in sending the file, the headers may already be sent
        //That means, that you don't get another 'res' (response)
        //You already sent off your 'res' (response)

        //You CANNOT do the following:
            // if (error) {
            //     res.redirect('/download/error');
            // }

        //You CAN do the following: (use the res.headersSent property)
        //res.headersSent is a boolean, true, if headers are already sent. False, otherwise
        //If headersSent is true, you cannot send another response
        if (error) {
            if (!res.headersSent) { //If headers have NOT been sent
                res.redirect('/download/error'); //Then we can send a response and redirect the user
            }
        }
    });

    //You can even set the headers yourself using res.set(), 
        //then you use res.sendFile()
        //e.g. res.set('Content-Disposition', 'attachment');
            //res.sendFile()
    
    //res.attachment()
        //res.attachment() ONLY sets the headers for 'Content-Disposition' to 'attachment'
        //If you provide a file, it will also set the filename
        //e.g. res.attachment(path.join(__dirname, 'userStatements/BankStatementChequing.png'), `JimsStatement.png`)

    //NOTE:
    //If the headers have already been sent, 
        //that is, if a response has already been sent to the user's browser
        //Then you cannot send another response. 
        //There is a boolean you have to check for

        //e.g. you send res.json({msg: 'test}), then you send res.send('<h1>hello~</h1>)
            //This will result in an error. 
            //It will tell you that express already sent headers
            //It cannot send it a second time
        //You have to see if the headers have already been sent
            //There is a boolean you can check for this
            //The property that contains the boolean is - 'res.headersSent'
        
        //We care about this because, if we res.download() is run and the headers have been sent (that is, 'Content-Disposition' has been sent from res.download())
            //but there is an error, you'd have to do something about it. You cannot just send the headers again
});

app.get('/logout', (req, res, next) => {
    //an HTML <a> anchor tag always points to a 'GET' route
    //In welcome.ejs, the 'logout' link points to '/logout'

    //res.clearCookie() takes 1 argument
        //1. Cookie to clear by name
    
    //res.clearCookie
        //res.clearCookie is built into express
        //So this will clear the 'username' cookie from the user's computer
        //Cookies are stored in your browser
        //You can see if res.cookie() is working to set your cookie
        //And you can see if res.clearCookie() is working to remove your cookie
            //By going to your browser's dev tools -> Application tab -> Right Column 'Cookies'
    res.clearCookie('username');

    //Send user back to '/login'
    res.redirect('/login');
});


app.listen(3000);
console.log('Server is listening on port 3000');

//Git: Revert to a Previous Commit
    // https://stackabuse.com/git-revert-to-a-previous-commit/
    //Get hash-or-ref from github
        //git reset --hard <hash-or-ref>

//Create 'package.json' file
    //npm init

//Cookie data is stored in your browser
    //Cookies are typically domain specific
    //That is, cookies are tied to a particular domain/web address/url
    //You can see what cookies are stored in your browser
        //Go to your developer tools
        //Application tab
        //Right column - 'Cookies'
        //There should be list of domains
        //Clicking on the domains reveals the name of the cookie and the value and when the cookie expires

//req.query
    //query strings are a common way of passing information around on the web
    //The query string is where you put INSECURE data
    //People that monitor your internet traffic can see the entire query string
    //So sensitive information should not be put into the query string

    //It is easy for the browser and server to pull stuff out of the URL if it needs to

    //We are using query strings to notify us of what has happened
        //and subsequently what we will do if a query string is marked a certain way
        //For example in our query string '/login?msg=fail&test=hello'
            //We used that to tell us that the user had a failed login/password

//req.params
    //Another way to pass information through the URL is using parameters
    //They are kind of like wildcard pieces of the path itself

//Keyboard shortcut
    //Copy a line of code - alt + shift + up arrow/down arrow
    //move line of code up or down - alt + up arrow/down arrow