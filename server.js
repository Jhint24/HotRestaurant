// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

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

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});