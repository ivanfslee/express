//Example for serving up static files with Express

const express = require('express');
const app = express();

// app.use
    //app comes with a use method
    //'use' is how you invoke most middleware in express

//'use' takes 1 argument in this example - though it can take many more arguments, each argument is a middleware
    //The argument is the middleware you want to run
    //'use' can take a 'path' argument, followed by multiple callback arguments
    //But the bare minimum is one argument, which is a callback
     
//'express.static(root, [options])'
    //express.static() is a built-in middleware function in Express
    //It serves static files and is based on 'serve-static' function in express module
    //Into express.static(), we pass in the directory that we want to make public
    //'app' will serve up everything inside the specified directory
    //In this case, we are serving up everything in the 'public' folder
    //We don't need to specify a route/path/url e.g. '/' root path

app.use(express.static('public'));

    //with the app running, if we go to url localhost:3000/styles.css, it will serve up the css file
    //if we go to url localhost:3000/node.png, it will serve up the image file

    //some people use express.static to serve up entire front-end sites
    //You just drop the entire front-end website into 'public' folder 
        //and app.use(express.static('public')); will serve everything up in the folder
    
    //Recall in our node JS server, we had to use if/else statements to see if http request matched the file name 
        //e.g. This entire code to serve up node.png:

            // else if (req.url === '/node.png') {
            // res.writeHead(200, {'content-type':'image/png'}); //'image/png' is a mime type. There are several hundred types.
            // const image = fs.readFileSync('node.png'); //can use fs.readFile also
            // res.write(image); //under the hood, we are not serving the file itself, but the contents of the file written to the buffer
            // res.end();
    
    //With express.static(), we have replaced lines 35 to 39 with one line - line 23

    //note: you can have multiple express.static statements
        //app.use(express.static('public'));
        //app.use(express.static('node_modules'));
        //So, on line 44 and 45, we are serving up files from both the public and node_modules folder
        //So in our URL, we can put localhost:3000/accepts/index.js - will serve up the index.js file in the accepts folder in the node_modules folder
        //Or another example - localhost:3000/express/lib/express.js
        
    //note2: important to serve up only what you want the world to have access to
        //That is why we name the folder 'public' as a reminder that everyone will have access to what's inside the 'public' folder
        //You really just want to include front-end type stuff - css files, etc 
        
app.listen(3000);
console.log('Server listening on port 3000');