//Express Generator
    //Express generator is a module that will create the entire scaffold
        //of an express server
        //It will write 90 percent of the code for us
    //This module is not a module we use inside of a node program
    //Express Generator is instead,
        //A utility module we use from the command line
    //In your terminal run this command:
    //'npm install express-generator -g'
    //'-g' means install globally

    //Typing 'which express' in terminal will tell you where global install
        //of express is located
    //Navigate to the directory you want your express server to be
        //In terminal type:
            //'express <express-server-folder-name>'
        //It will create a new folder <express-server-folder-name> with the following contents:
            //package.json
            //app.js
            //routes folder
            //public folder
            //stylesheets folder
            //views folder (with 'jade' as the default view engine)
            //etc
            //All the scaffolding that we've been creating manually

            //Go into the folder and type 'npm install' 
                //to install all the dependencies that were included
                //in the 'package.json'

            //In 'package.json' there is a 'scripts' property with 'start' property
                //'start': 'node ./bin/www'

                //You can type 'nodemon' (without file/path) in terminal to start up express server
                