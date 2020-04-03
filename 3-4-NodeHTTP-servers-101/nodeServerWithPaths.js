const http = require('http'); 

const server = http.createServer((req, res) => {
    //console.log(req.url); //inside request object there is an 'url' property. This line will log the path the user requested relative to our root domain
    
    if (req.url === '/') {
        //the user wants the homepage
        //we know, because the req object has '/' in the url
        res.writeHead(200, {'content-type':'text/html'});
        res.write('<h1>This is the homepage!</h1>');
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