// minimal package for creating web server
const express = require("express")
const api = express()
const jbapp = require()

const port = 8001;


api.get("/Countries", (req, res) => {
    console.log("start requesting for data...")

    const {
        Country,
        Capital
    } = req.query;

    if (!Country || !Capital) return res.send("Oppps something wrong! , please try again!!")
    console.log(Country + " " + Capital)
    return res.send(`Countries  Details: ${Country} , ${Capital}`);
})

api.listen(port, (err) => {
    if (err) console.log(err.message)
    console.log(`Api listening to port:???? ${port} `)
})