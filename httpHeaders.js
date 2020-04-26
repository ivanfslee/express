//Anytime you do any of these:
    //res.json
    //res.render
    //res.send
    //res.sendFile
    //res.download
    //res.redirect
    //or any other response
    //You are NOT NOT NOT sending a webpage, json, file, etc
    //What you are sending when you are doing any of the above, 
        //YOU (Express server) ARE SENDING AN HTTP MESSAGE
            //https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages
            //Recall HTTP message is composed of:
                //1. start line
                //2. headers 
                //3. blank line
                //4. body
        
        //You have no control over what the other side is going to do with 
            //the HTTP message
        
        //All the browsers, have agreed to follow the protocol (HTTP)
    
    //Start line and body are straightforward
    
    //The important parts are in the header

//Client sends request to express server
//Express server using middleware modifies request object and response object
    //Express server runs a bunch of logic
//Express sends back a response to client
    //Response is an HTTP MESSAGE
        //Composed of startline/header/body

//The headers in the response will tell the client
    //what they're supposed to do with the data you sent to them
    //from the express server