//Connecting to the 'cloud'
    //The 'cloud' does not actually exist

    //The 'cloud' is just a bunch of computers connected together

    //The 'cloud' is someone elses computer

    //AWS is a cloud service

    //Azure, another cloud service

    //GCP - google cloud platform

    //These are all a bunch of computers in data centers in Ohio/Virginia/Oregon/ etc

    //The 'cloud' is made up of alot of computers that don't belong to you.

    //Cloud - bunch of computers connected to each other
        //computers are passing around 'packets' (little streams of data)

    //When you type in url in browser, netflix streaming, etc
        //Data is getting passed back and forth between server and client
        
        //Client -> data (packets) -> server
        //       <- data (packets) <-

    //With express, you are responsible for the server, outlined in the diagram above

    //You handle the request (in the form of packets) from the client and spit out a response (in the form of packets)
    
    //Node, for the most part handles this
    
//5 basic levels in every packet
    // Application Layer - As developers, we will mostly be working here. HTTP, FTP, SSH, SMTP (all these are the various protocols used in this layer)
    // Transport Layer - either UDP or TCP
        //The transport layer and network layer, together form the Internet Protocol suite or TCP/IP
    // Network Layer (sometimes called the internet layer) - IP 
    // Link Layer - wifi/ethernet connection (a hardware layer)
    // Physical layer - the physical cables connecting stuff together (a hardware layer)

    //As developers, we typically deal with Application layer the most, and sometimes Transport and Network Layer
        //Express only handles HTTP requests
        //HTTP uses the transport layer. It uses TCP

//The transport Layer creates 2^16 ports (~65000) on your computer