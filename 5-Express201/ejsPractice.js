//request -> Node/express server -> produces HTML/CSS/JS response

//responses we have done so far:
    //1. res.send()
    //2. res.sendFile() 
        //express.static() is similar to res.sendFile, but express.static() can serve up entire front-end static websites inside express

//The responses always end up with sending an HTML/CSS/JS response
    //because browsers are on the other end of the response
    //and browsers mainly read HTML/CSS/JS

//Because of this, express' goal is always to get to HTML/CSS/JS somehow
    //To either:
        //1. send json back using res.json()
        //2. or actually send a front-end product - HTML/CSS/JS

//We can have a dynamic website even wit just HTML/CSS/JS
    //The javascript using AJAX, can go out and fetch data
    //or use a router, using vue/angular/react/ etc
    //These all can create a dynamic website, but it's still going to be static code. 

//What if, instead of using JS to manipulate the DOM, 
    //what if we actually wrote the DOM the way we wanted it from the beginning
    //so when the response is sent out, it shows up front the correct way
    //JS would not need to be involved because we wouldn't need that extra step.

    //In order for the information to be correct and we're not using JS
        //we need somthing that speaks both express and front-end
        //This is what the template engine does

//Request comes in and reaches express server
//express server does its thing
//before the response goes out, 
    //We send the template, data from express
    //The template will build HTML/JS/CSS for us
    //and it will then take that final product and send it back out the response

//So template engine's job is to marry node with the front-end
    //So that, what we get in the end, is that, instead of being a static front-end site
    //we have a dynamic front-end site where we can build the DOM based on nodeJS.

//Template engine (ejs file/pug file/mustache file/etc) essentially builds the DOM based on data it gets from node/express server

//Node/express server -> template engine -> Front-end HTML/CSS/JS

//5:43

