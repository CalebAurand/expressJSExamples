let express = require("express");
//the express variable name you can call
//whatever you want
//the ("express") module name must be exact, not different

/**
 * define the port that this server will
 * be listening on for requests/running on
 */
let PORT = 8000;

//declare a variable for representing express method
let app = express();

//write parameters and callback function
//to tell server what to do when it receives
//get requests
//path specified is localhost:8000/hi
app.get("/hi", function(req, res){
    //when the get request comes in, the server executes
    //this logic
    //the req - the request json object that is coming in
    //      this comes from the client
    //the res - what my response is going to be for this
    //      request

    console.log("GET /hi");
    //show that the code is getting to this point, with GET type

    //create an objject name blob
    let blob = {};
    blob.message = 'hi';
    blob.time = new Date();
    //set the response parameter to json object/ then put
    //the blob object in it
    res.json(blob);
})

/**
 * This endpoint reads the query params "name",
 * this endpoint responds with Hello there, how are you?
 * 
 * Modify it to take in a query parameter with the name
 * of the person. Then say Hello there {name}, how are you?
 * If no name is available on the query param;
 * send back "Hello there, how are you?"
 */
app.get("/hello", function(req, res){
    console.log("GET at /hello");

    let queryP = req.query;
    let string = "<html><body>Hello there!<br>Hope you are having a swell day</body></html>";
    
    console.log(queryP.name);

    //if the query param contains the name then something
    if (queryP.name){
        res.send(`Hello there ${queryP.name}, how are you?`);
    }else{//else print out this string
        res.send(string);
    };
    
    //this will send a string back to the client in response
    
})

app.get("/sup", function(req, res){
    console.log("GET /sup");
    
    //this will send a status code back to the client
    //though will will not send any other data back
    res.sendStatus(204);
})


//sometimes we want to return errors
app.get("/hey", function(req, res){
    //we wont always return an error in real code
    //but for this example we will always return an error status
    //for this url
    console.log('GET in /hey');

    //res.status allows us to send a status code
    //.send then allows us to send a string as well
    res.status(400).send("hey is for horses");
});

/**
 * This endpoint responds back with the query params
 */
app.get("/echo", function(req, res){
    console.log("GET /echo");
    //use req.query to get the query parameters
    console.log("query params = ", req.query);
    res.json(req.query);
});

//tell the app variable to listen on
// port defined by PORT variable
app.listen(PORT, function(){
    console.log("App started listening on port", PORT);
})

/**
 * blob should return
 * {
 * message: "hi"
 * date: new date 5/12/2022 
 * }
 */

/**
 * can use query parameters in the browser or GET request
 * syntax ?name=bob&height=5&weight=150
 */