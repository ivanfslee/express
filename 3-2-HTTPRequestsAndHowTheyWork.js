//5 layers
    //Application - HTTP protocol lives here
    //Transport
    //Network
    //Link
    //Physical

    //Initially, HTTP was made just to pass around HTML
        //'Hypertext' in both HTTP and HTML
        //HTML - 'Hypertext markup language'
        //HTTP - 'Hypertext transfer protocol'
        //HTTPS - 'Hypertext transfer protocol secure'
    
    //Very first webpage ever made:
        //info.cern.ch
    
    //Now, HTTP doesn't just pass around HTML any more
        //HTTP passes around HTML
        //HTTP passes around Images
        //HTTP passes around 4K video
        //HTTP passes around MP4
        //Any type of video format you can think of
    
    //Recall, HTTP is based on TCP, which is part of the transport layer

    //TCP/IP are used to help computers find each other
        //If the request is initiated in HTTP, then both computers need to 
        //be able to speak in HTTP
    
// HTTP
    //HTTP as a protocol is:
        //HTTP is efficient
            //UDP just keeps on sending data to the other machine
            //TCP is connection based, unlike UDP
                //TCP remains connected
                //And remains connected until all data has been sent
            //HTTP does not have to stay open
            //HTTP is only connected when absolutely necessary
            //Once the request arrives, the machines will disconnect entirely from each other
                //as soon as the responder is ready, the HTTP connection will re-establish
                //across the TCP and will send the response
        //HTTP is stateless
            //If you've done REST api's before, the ST at the end of REST stands for 'stateless'