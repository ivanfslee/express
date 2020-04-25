//express()
    //methods
        //express.json() x
        //express.raw() - not in course
        //express.static() x
        //express.Router() x
        //express.text() - not in course
        //express.urlencoded() x

//Application
    //Properties
        //app.locals
        //app.mountpath
    
    //Events
        //mount
    
    //Methods
        //app.all() x
        //app.delete() x
        //app.disable()
        //app.disabled()
        //app.enable()
        //app.enabled()
        //app.engine()
        //app.get() x
        //app.get() x (paired with app.set()) - app.get('view engine')  - will tell you what view engine you are using
        //app.listen() x
        //app.METHOD() x - all the other HTTP methods
        //app.param() x
        //app.path()
        //app.post() x
        //app.put() x
        //app.render()
        //app.route()
        //app.set() x
        //app.use() x

//Request
    //Properties
        //req.app
        //req.baseUrl
        //req.body x
        //req.cookies x
        //req.fresh
        //req.hostname
        //req.ip x
        //req.ips
        //req.method
        //req.originalUrl
        //req.params x
        //req.path
        //req.protocol
        //req.query x
        //req.route
        //req.secure
        //req.signedCookies
        //req.stale
        //req.subdomains
        //req.xhr
    
    //Methods
        //req.accepts()
        //req.acceptsCharsets()
        //req.acceptsEncodings()
        //req.acceptsLanguages()
        //req.get()
        //req.is()
        //req.param() x - deprecated method - use req.params/req.body/ or req.query instead
        //req.range()

//Response
    //Properties
        //res.app
        //res.headersSent x - boolean value that told us whether or not we have sent back the response
        //res.locals x
    
    //Methods
        //res.append()
        //res.attachment()
        //res.cookie() x
        //res.clearCookie() x
        //res.download() x
        //res.end()
        //res.format()
        //res.get()
        //res.json() x
        //res.jsonp()
        //res.links()
        //res.location()
        //res.redirect() x
        //res.render() x
        //res.send() x
        //res.sendFile() x
        //res.sendStatus()
        //res.set()
        //res.status()
        //res.type()
        //res.vary()

//Router
    //Methods
        //router.all() x - will serve up pages at any given HTTP method type
        //router.METHOD() x - this will cover everything else router.all() doesnt cover - router.post/router.put/router.get
        //router.param() x - same as app.param(), but just for a specific router. app.param() is for the app and will apply to the entire application
        //router.route()
        //router.use() x - same as app.use(), but just for a specific router. app.param() is for the app and will apply to the entire application