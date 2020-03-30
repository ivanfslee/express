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
    //When you are using port 3000 for a node app
    //The reason you have port 3000 is that you are using one of the 65000 ports
        //the transport layer creates
    
    //Ports analogy - 
        //Hotel - a single building with a ton of numbered individual rooms
        //If someone comes to the hotel in order to find a guest, they need to know the room number 
        //and with the room number, they can actually find who they are looking for. 

    //Application of a given machine initiates an HTTP request that will originate from arbitrary port 49742
    //And it wants to talk to port 80 on another computer

    //That request will get handed off to the transport layer
        //where it will get wrapped up in a 'segment'
        //Inside of segment is metadata and it will have destination port, which is port 80
        //and it will have the source port - 49742

    //Transport layer then hands it off to the network layer for further processing

    //When it gets to the receiving machine, it will go through the process in reverse
    //and eventually find the right port

    //Two different types of transport layer protocols
        //UDP

        //TCP