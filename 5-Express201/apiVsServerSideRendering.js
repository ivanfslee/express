//Choosing res.render() vs. res.json() for our response
    //Two ways to go with express
    //Though, they are not mutually exclusive, you CAN use them together
    //We are treating them separately to show how they care conceptually different

//Server-side rendering vs. Building an API

//Go to Myspace in 2003
    //You, the client make a request to Myspace servers on port 80
    //Myspace gets your request
    //Myspace sends a response of HTML, JS, CSS
    //Your browser can mainly read 3 things - HTML, JavaScript, CSS

    //The question is what goes on inside the MySpace servers?
    
//Inside the Server
    //Front-end UI (not part of the server stack) // FE UI - React or Vue
    //Programming Layer // PL - C/C++/Java/Python/Ruby/PHP
    //Database Layer // DB - database - SQL/PostGres/etc or DynamoDB or MongoDB
    //Web Server layer // WS - Apache or IIS or NGINX or NodeJS or Web Sphere
    //Bottom layer of the stack is the Operating System //OS - linux or windows server or UNIX

//Port 80 - created by the transport layer

//Because browsers mainly read HTML/CSS/JS, does MySpace have an HTML page for every user
    //stored in their server?
    //Potentially millions of HTML pages that they serve up?
        //No. 
        //The user gets to port 80. And the web server kicks into gear.
        //Let's say its apache. Apache serves up, using PHP. It looks into database and hops
        //back and forth between the programming layer and database layer, finding everything it needs
        //Then apache sends it back to user
        //In this example, PHP and MySQL have worked together to create HTML/JS/CSS
        //The HTML/CS/CSS was given to Apache/whatever web server MySpace was using. 
        //Then was sent via HTTP to the user.

        //There isn't a single HTML file to serve to the user.
        //A whole bunch of stuff happens inside the server.

    //User makes a request-> MySpace server port 80
    
//MySpace server will have some sort of template file because all the MySpace pages look the same
    //The unique fields in the template e.g. Name, picture, list of friends. 
    //Those fields are populated via PHP
    //Then be sent back to the user as HTML/CSS/JS

    //Every time we make the request, the MySpace servers go through the entire process of building out the template again
        //Build it out, and send it back to us
        //Build it out, and send it back to us
        //This is called server-side rendering because the server is in charge of putting together the HTML/CSS/JS

        //Wikipedia is still done this way. 
            //It is run on PHP and MySQL
            //You go and ask wikipedia for something, and wikipedia builds out the whole thing
        
    //This is what we do with res.render()
        //With express, we create a template that is then packaged into HTML/CSS/JS
        //This is server-side rendering - the server is in charge of everything on every page load

//res.json 
    //user makes a request to facebook -> facebook server 
    //The first time you go to facebook, you will get everything - HTML/CSS/JS
    //Every time after this that you click on a link, facebook is a single-page app 
    //And because of the way react works and manages the virtual DOM 
    //And this is true for vue, angular, and others, when you make a new request
    //When you make a new request, you are going to use ajax and instead of sending back HTML/CSS/JS
    //The server will just send back json

    //And the original HTML document that was loaded up will be updated by the json
    //The dom will be updated by the json that was sent from the server

    //With ajax, there is still going to be a new HTTP request. 
    //There is still going to be a req and res object
    //Instead of responding with a template, with HTML/CSS/JS, we are just going to respond with JSON

//res.render
    //server-side rendering/session cookies
    //User always has to come to the server for everything
    //because the server contains everything
    //Server will always respond with HTML/CSS/JS
    //Every single time.
        //e.g. wikipedia
    //With res.render, you can make muse of session variables, cookies, etc
    //The user has to come to the srver for everything because the server contains everything
    
//res.json
    //API type situation
    //Typically for API/JSON needs
    //You as the user will go out and make a request to the server
    //The first time, the server will send back HTML/CSS/JS
    //Every time after that, server will just send back JSON
    //And the DOM will update accordingly (react/vue/angular/ember etc)
    //It will seem like you are going from page to page to page
    //But it is really just the DOM changing
        //e.g. Facebook/Amazon
    //This solution can be really fast, and has cool UI/UX opportunities
    //But you have to store stuff on the browser that you wouldn't normally want to