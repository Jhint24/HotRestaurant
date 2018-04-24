
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require("http");
var fs = require("fs");
require("./app/apiRoutes");
require("./app/htmlRoutes");

//Sets up the server and function for requests to it
// =============================================================
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;
    switch (path) {

        case "/":
          return displayHome(path, req, res);
      
        case "/reserve":
          return displayReserve(path, req, res);

          case "/tables":
          return displayTables(path, req, res);  
        
        }
}
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
// fs functions to run in switch
// =============================================================
function displayHome(url, req, res)  {
    
    fs.readFile(__dirname + "/home.html", function(err, data) {
  
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));


// Star Wars Characters (DATA)
// =============================================================
var reservations = [
    {
        routeName: "yoda",
        name: "Yoda",
        phone: "213-333-2632",
        email: "yoda@yoday.com",
        ID: 2000
    },
];

var waitList = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all characters
app.get("/api/reservations", function (req, res) {
    return res.json(reservations);
});

// Displays a single character, or returns false
app.get("/api/reservations/:reservation", function (req, res) {
    var chosen = req.params.reservation;

    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
        if (request === reservations[i].routeName) {
          return res.json(reservationss[i]);
        }
      }

    return res.json(false);
});

// Create New Reservations - takes in JSON input
app.post("/api/reservations", function (req, res) {
    var newreservation = req.body;
     console.log(newreservation);
    for (var i = 0; i < reservations.length; i++) {
        if (reservations < 4) {
            reservations.push(newreservation);
        }
        else {
            waitlist.push(newreservation);
        }
    }
});



