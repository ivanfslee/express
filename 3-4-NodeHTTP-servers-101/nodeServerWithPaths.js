const http = require('http'); 

//fs = file system module
    //fs is built into node
    //will enable us to read files
    //fs gives node js, access to THIS computers (the server's) file system
    //We use the fs module to serve up HTML files as responses to requests

const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(`A request was made to: ${req.url}`); //inside request object there is an 'url' property. This line will log the path the user requested relative to our root domain
    
    if (req.url === '/') { //if requests url property is the root url
        //the user wants the homepage
        //we know, because the req object has '/' in the url
        res.writeHead(200, {'content-type':'text/html'}); //'text/html' is a mime type, there are several hundred types

        const homePageHTML = fs.readFileSync('node.html'); //can use fs.readFile also
        res.write(homePageHTML); //under the hood, we are not serving the file itself, but the contents of the file written to the buffer
        res.end();
    } else if (req.url === '/node.png') {
        res.writeHead(200, {'content-type':'image/png'}); //'image/png' is a mime type. There are several hundred types.
        const image = fs.readFileSync('node.png'); //can use fs.readFile also
        res.write(image); //under the hood, we are not serving the file itself, but the contents of the file written to the buffer
        res.end();
    } else if (req.url === '/styles.css') {
        res.writeHead(200, {'content-type':'text/css'}); //'image/png' is a mime type. There are several hundred types.
        const css = fs.readFileSync('styles.css'); //can use fs.readFile also
        res.write(css); //under the hood, we are not serving the file itself, but the contents of the file written to the buffer
        res.end();
    } else {
        res.writeHead(404, {'content-type':'text/html'});
        res.write(`<h4>Sorry, this isn't the page you are looking for</h4>`);
        res.end();
    }
    
});

server.listen(3000);

//Postman - utility made by google
    //It allows you to make the various types of HTTP requests (e.g. GET REQUEST, POST REQUEST)