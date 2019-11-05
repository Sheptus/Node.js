const express = require('express');
const moment = require('moment')
const logger = require('s_app_logger');

const app = express();
const port = 4050;

app.get('/Vication', (req, res, next) => {
    console.log("start req...")
    const {
        fro,
        to,
        destination
    } = req.query;

    if (!fro || !destination || !to) return res.send("Oppps something wrong! , please try again!!")
    console.log(" You Booked to: " +
        destination + "From: " + fro + "To: " + to)


    console.log(" You Booked to: " +
        destination + "From: " + fro + "To: " + to)
    console.log("res sended ...");
    return res.send(`You Booked to: ${destination}, From: ${fro} , To: ${to}`);
})


// the serveer listen to some port with callBack function 
app.listen(port, (err) => {
    if (err) console.log("Oppss some Error --:> " + err.message)
    console.log(`Server running on http://localhost:${port} `)

})