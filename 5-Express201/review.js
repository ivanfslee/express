//Networking - http and tcp/udp
    //HTTP is based on TCP, so HTTP has all the benefits/properties of TCP
        //stateless
        //connectionless
        //flexible
        //can pass around HTML as well as 4K video
    //TCP and IP work together to get your computers ready to talk to one another
        //e.g. server and client
    //HTTP message structure:
        //1. start-line
            //start-line in request has - method, path, http version (e.g. GET /blog http/1.1)
            //start-line in response has - http version, status code, text representation of status code (e.g http/1.1 200 OK)
        //2. headers
            //headers contain key value pairs
                //e.g. {content-type: text/html}
                //e.g. {content-type: application/json}
                //e.g. {Cache-Control: public, max-age=0}
                //e.g. {Date: Fri, 24 Aug 2018 15:23:58 GMT}
        //3. BLANK LINE (between headers and body)
        //4. body
            //Body contains the stuff 
                //e.g. HTML
                //e.g. 4k video (in binary)
                //e.g. image

    //We get the HTTP message 
    //We take information out of the HTTP message
    //We build an HTTP message
    //We send out the HTTP message using TCP/IP

//Node server
    //We wrote the headers 
    //We wrote the body
        //We used the fs (file-system) module to write the body
    //We also closed the connection 
    //server.listen(3000) is analogous to app.listen(3000) in our express server
        //Each computer has 2^16 (65000 ports)
        //Every computer's network connection is divided up into 65000 ports
        //You can use any port as long as you have permission to use it and the port is not already in use
        //The transport layer creates the 65000 ports
    //When HTTP traffic came in on port 3000, we would handle it with a callback function
    //In the callback, that would deal with the req and res objects

    //Req and res objects are really important with middleware

    //Put simply, the req and res objects are just HTTP messages comming in (request) as a network request and the HTTP message going out (response) as a network response

//Express server 101
    //express utilizes NodeJS
    //app === express() === createApplication() function inside express node module

    //server.listen() is analogous to app.listen()

    //router

    //app.get, app.post, app.all, app.put, app.delete etc

    //serve up static files with express.static() middleware

//Express server 201
    //Middleware - any function that has access to req, res, and next

    //networking on the outside, node/express development on the inside
        //That is, the request comes from the outside. 
        //The response is sent to the outside
        //On the inside is anytime you see a callback/function (req, res, next)

    //next() is the way to move a piece of middleware forward
        //without next(), the cycle will stop

    //With app.use, we used express.json() - body parser
        //The body parser creates req.body, otherwise, req.body is undefined
        //Any piece of data passed through in the HTTP request that has a 'content-type' of 'application/json' or 'x-www-form-urlencoded' or other content-type
        //The data will be put into req.body 

    //With app.use, we used express.urlencoded() - body parser

    //app.use will be the main way we use middle-ware except when we are writing out the entire function 
    
    //With app.use, we used helmet() - third party module
        //Writes and sets headers to protect from certain vulnerabilities

//Request
    //req.ip - contains requesters ip
    //req.path - contains the requested path
    //req.body - contains parsed data (typically parsed from the request via middlewares express.json() and express.urlencoded())

//Response
    //res.send (or .end()) - send content-type of 'text/html'
        //You would use res.end() only if you were to run a process but never actually respond with something
            //With res.end(), you essentially get the request and not send a response back and just close the connection
    //res.sendFile - send a file
        //e.g. send an HTML file
        //We will seldom use this
    //res.locals - available through the res
        //You can store local variables in this particular request
        //Useful for middleware early on in the process
        //Earlier, we used res.locals to store a boolean that showed that our used was validated
        //Later on in the middleware process or the request/response cycle, we were able to check in on the local variable
        //Later, res.locals will be useful when serving up templates. The template will be able to pull out data from res.locals
    //res.json (or .jsonp) - sends json back as content-type of 'application/json'

//Keyboard shortcuts
    //ctrl + pgup/pgdown moves across tabs in vscode