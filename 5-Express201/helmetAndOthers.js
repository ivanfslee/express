const express = require('express');
const app = express();
app.use(express.static('public'));
//if you go inside express.static - you will find a function with req and res because it is a piece of middleware
//Just like app.post(), app.get(), etc

app.post('/ajax', (req, res) => {
    console.log(req);
    res.send('Testing');
});

//In addition to 'create application' - (line 2) and express.static(); (line 3)
//We use other express methods:
    //express.json();
    //express.urlencoded();
    //express.Router();

//express.json();
    //Built-in middleware function in express.
    //It parses incoming requests with JSON payloads and is based on 'body-parser' module in node_modules
    //2:45

app.listen(3000);
console.log('Server is listening on port 3000');