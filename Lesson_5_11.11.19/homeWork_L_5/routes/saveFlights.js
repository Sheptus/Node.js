const express = require('express');
const router = express.Router();
const flights = require('../flights.json.js');
const writeToFile = require('../utils/fileWriter');
const validationFlight = require('../validations/validationFlight');

router.use('/', validationFlight)

router.post('/saveFlights', (req, res, next) => {

    for (let i = 0; i < req.body.length; i++) {
        const {
            departure,
            arrival,
            flyingFrom,
            flyingTo,
            company
        } = req.body[i];
        flights.push({
            departure,
            arrival,
            flyingFrom,
            flyingTo,
            company
        });
        writeToFile('flights.json', flights);
    }
    res.send("Flight saved")
})



module.exports = router;