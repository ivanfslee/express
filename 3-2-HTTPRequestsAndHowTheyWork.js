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
            //There is no dialogue. 
            //That means, the machines only know about each other for as long as the connection is open
            //As soon as the connection closes, everything is completely forgotten
            //So if they need to talk again for any reason, they have to start
            //completely over again.

            //That is to say, its like the very first conversation.
                //You have to tell me who you are and tell me what you want
            
            //Its not like a phone conversation, where you talk, and I remember what you just said.
                //And the conversation flows, and I can recall what I said earlier
                //HTTP doesn't work like this.

                //Stateless means I only know about what you just said right now
                //and I'm going to respond based on that.

                //So, the requester gets one thing to say and the responder gets one response to it

                //HTTP requests and response to UDEMY.com

                    //1. client -> ISP -> (via TCP/IP) UDEMY servers
                        // TCP says I would like to make a connection to your UDEMY servers

                    //2. via TCP, the UDEMY servers will respond yes, I am okay with that

                    //3. Data will go from client to UDEMY server
                        //Some of that data will come in the form of an HTTP request
                        //UDEMY server receives HTTP request from client
                            //When that happens, that HTTP connection is terminated
                            //TCP connection is still active and connected
                    
                    //4. Meanwhile, the client is still waiting on a response.
                        //Client is still waiting for an HTTP response.
                        //Server sends back an HTTP response
                            //and that connection will close
                    
                    //5. TCP connection closes

//HTTP message
    //What does an HTTP message look like