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
    //It serves static files and is based on serve-static
    //Into express.static(), we pass in the directory that we want to make public
    //app will serve up everything inside the specified directory
    //In this case, we are serving up everything in the 'public' folder
    //We don't need to specify a route/path
app.use(express.static('public'));

app.listen(3000);
console.log('Server listening on port 3000');