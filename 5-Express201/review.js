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
    //7min
    //req, res

//Express server 101
    //express utilizes NodeJS
    //app === express() === createApplication()
    //server.listen() is analogous to app.listen()

    //router

    //app.get(), app.post, app.all,

    //serve up static files with express.static() middleware

//Express server 201
    //Middleware - any function that has access to req, res, and next

    //networking on the outside, node/express development on the inside

    //app.use, anytime you see a callback/function (req, res, next) =>

    //next() is the way to move a piece of middleware forward

    //express.json() - body parser

    //express.urlencoded() - body parser

    //helmet() - third party module

//Request
    //req.ip - contains requesters ip
    //req.path - contains the requested path
    //req.body - contains parsed data (typically parsed from the request via middlewares express.json() and express.urlencoded())


//Response
    //res.send (or .end()) - send content-type of 'text/html'
    //res.sendFile - send a file
    //res.locals - available through the res
    //res.json (or .jsonp) - send content-type of 'application/json'


//Keyboard shortcuts
    //ctrl + pgup/pgdown moves across tabs in vscode