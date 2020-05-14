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
    
//5 basic levels in every packet - ATNLP
    //TCP/IP Linus Tech Tips 6minute video - https://www.youtube.com/watch?v=PpsEaqJV_A0
    
    //Transmission Control Protocol vs User Datagram Protocol

    //TCP vs UDP 5 minute video - https://www.youtube.com/watch?v=uwoD5YsGACg
        //TCP - is initiated by a 3-way handshake
            //Connection oriented protocol
            //TCP guarantees data delivery and that the data arrives in the right order
        //UDP - known as the 'fire and forget' protocol
            //Connectionless oriented protocol
            //UDP does not guarantee data delivery
            //Because of this less overhead for data delivery,
            //UDP is faster than TCP


    // Application Layer - As developers, we will mostly be working here. HTTP, FTP, SSH, SMTP for email (all these are the various protocols used in this layer)
    // Transport Layer - either UDP or TCP
        //The transport layer and network layer, together form the Internet Protocol suite or TCP/IP
        //Two main types of transport layer protocols - TCP and UDP 
    // Network Layer (sometimes called the internet layer) - IP 
    // Link Layer - wifi/ethernet connection (a hardware layer)
    // Physical layer - the physical cables connecting stuff together (a hardware layer)

    //As developers, we typically deal with Application layer the most, and sometimes Transport and Network Layer
        //Express only handles HTTP requests
        //HTTP is used in the application layer.
        //HTTP utilizes the transport layer. HTTP uses TCP.

//The transport Layer creates 2^16 ports (~65000) on your computer
    //When you are using port 3000 for a node app
    //The reason you have port 3000 is that you are using one of the 65000 ports
        //the transport layer creates 65000 ports on your computer
    
    //Ports analogy - 
        //Hotel - a single building with a ton of numbered individual rooms
        //If someone comes to the hotel in order to find a guest, they need to know the room number 
        //and with the room number, they can actually find who they are looking for. 

    //Application of a given machine initiates an HTTP request (or some kind of network request) that will originate from arbitrary port 49742
        //And it wants to talk to port 80 on another computer

    //That request will get handed off to the transport layer
        //where it will get wrapped up in a 'segment'
        //Inside of 'segment' is metadata and it will have destination port, which is port 80
        //and it will have the source port - 49742

    //Transport layer then hands it off to the network layer for further processing

    //When it gets to the receiving machine, it will go through the process in reverse
        //and eventually find the right port

    //Two different types of transport layer protocols
        //UDP
            //User Datagram Protocol
            //HTTP uses TCP and not UDP
            //UDP is incredibly light weight 
                //8 bytes for the header
                //UDP has little overhead
            //UDP is connectionless
                //You don't have to wait for the connection to be established
                //Client can just start talking to server right away and send data
                //Even if the other computer doesn't want to hear from you.
            //Consistency
                //UDP will send data no matter what
                //Packet loss? If there is packet loss, UDP will keep on sending data
                //What if network is congested? UDP doesn't care. It will just keep sending packets and make network more congested
                //Packets out of order? UDP doesn't care. They will show up out of order on the other side then.
            //The upside to UDP is that it is very FAST
            //Headers are incredibly small
            //You don't have to bother to set up a connection to start. You just send data.
            //Its consistent in the way it sends data. Its going to always send data. 
            //You can count on it always acting the same. 

            //Use cases:
                //UDP is typically used for video games or real time communication
                //Gaming - your character stutters. Your client data is sending to the server but not reaching the server.
                    //Suddenly the server gets the data and updates it
                //Video chat - you are talking, and things seem normal. Suddenly, your video feed catches up.
            
            //Bottom Line:
                //UDP is fast but incredibly unreliable
                //UDP could be sending data, but there might not even be anyone on the other side to receive
                    //Or Server refuses to get the data for some reason
                    //or server disappears before data ges there
                //HTTP is not based on UDP, so Express does not have the faults of UDP
        //TCP
            //Transmission Control Protocol
            //HTTP uses TCP and not UDP
            //TCP is Connection-based
                //If you are a client and want to talk via TCP to a server
                //You need to initiate a 3-way handshake
                //In order to send any data, you have to first initiate a connection. 
                //3-way handshake
                    //1. Client asks server to initiate connection
                    //2. Server says yes or no
                    //3. If yes, Data starts going from client to server

            //Because of 3-way handshake, TCP is reliable
                //UDP just sends data, even if there is no server there. Or server disappears before packet arrives there or server refuses the packet

            //TCP also has delivery acknowledgement of data. 
                //Every time data comes through to server, the server will let the client know that the server got the clients data and vice versa
                //TCP gets acknowledgement that the data got received.
                //The receiving server basically says 'I got the data'.
                    //Analogous to certified mail/mail with receipt at the post office
            
            //TCP has retransmission of data.
                //UDP may not know whether data was received or not because there isn't data acknowledgement.
                //In a TCP connection, if data isn't received, the server can let the client know I didn't get something
                //Then the client, can send it again.
            
            //TCP has in-order packets
                //If packets of data don't come through in the right order
                //things may get messed up
                //But with TCP, you can guarantee that the packets arrive in the correct order
                    //regardless of what happens with the network
            
            //TCP has congestion control
                //If the network is overwhelmed 
                //e.g. you are at a concert or sporting event and the network is overwhelmed
                    //You're trying to connect to something. 
                    //TCP may intentionally introduce latency to try and keep packet loss to a minimum
                    //So that the problem does not get worse

                    //The end goal is to try and make things better.
                
            //TCP
                //Anything where reliability is crucial
                //HTTP utilizes TCP because we need all the reliability that TCP offers.
                //If we are send a web page to a client, we need the packets showing up in order
                    //if not, the HTML will show up completely wrong
                    //or CSS is garbled format

            //UDP
                //Fast and can be unreliable, you would go with UDP
                //gaming, live communication, things you never want to introduce latency
            
            //TCP and IP together - get two computers ready to talk to each other
                //They create an environment that will allow two machines to talk to each other
                //TCP is used in the transport layer and is used instead of UDP for HTTP because 
                //TCP is reliable and UDP is not.