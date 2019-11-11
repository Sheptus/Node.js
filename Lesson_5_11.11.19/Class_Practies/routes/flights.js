const express = require('express');

const router = express.Router();


router.get('/flights', (req, res, next) => {
    res.send([{
        "flightID": "EU-0345",
        "destenation:": "Dubai"
    }, {
        "flightID": "KLM-1856",
        "destenation": "Amsterdam"
    }, {
        "flightID": "UA-0982",
        "destenation": "San-Fransico"
    }])
})



module.exports = router;