// # Dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//nicole
app.post("/api/reservations", function (req, res) {
    var newReservation = req.body;
     console.log(newReservation);

     //reservasions.push(newReservation);
     //var isBooked;
     //if(reservations.length <= 5){
        //  isBooked = true;
    //  }
    //  else{
        //  isBooked = false;
    //  }

    // res.json(isBooked);

    for (var i = 0; i < reservations.length; i++) {
        if (reservations < 4) {
            reservations.push(newreservation);
        }
        else {
            waitlist.push(newreservation);
        }
    }
});





