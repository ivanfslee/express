const http = require('http'); 

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'});
    res.write('<h1>Hello, world</h1>');
    res.end();
});

server.listen(3000);

//Postman - utility made by google
    //It allows you to make the various types of HTTP requests (e.g. GET REQUEST, POST REQUEST)