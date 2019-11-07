const express = require('express');
const cars = require('./cars.json');
const moment = require('moment')
const logger = require('s_app_logger');

const app = express();
const port = 4023;


app.get('/cars', (req, res, next) => {
    console.log("start req...")

    const dateS = new Date();
    const curDate = `${dateS.getDate()}:${(dateS.getMonth() + 1)}:${dateS.getFullYear()} - ${dateS.getHours()}:${dateS.getMinutes()}:${dateS.getSeconds()}`
    const logTxt = `[${curDate}] ${req.get("host")}${req.originalUrl} `
    res.send({
        cars
    });
    logger.writeToFileSync("./log.txt", logTxt)
    console.log(logTxt + "[" + curDate + "]");
    // user send file to recive content
    //download to download the file
    console.log("res sended ...");
    return res.download("Users\\sheptus\\Documents\\GitKraken\\Node.js\\Node.js\\Lesson_2_31.10.19\\homeWork_L_2\\log.txt")

})

app.get('/logs', (req, res, next) => {
    console.log("start request")
    const {
        cars,
    } = req.query;
    if (!cars) return
    res.send("Something went wrong!!")
    logger.writeToFileSync("./log.txt", cars)
    // user send file to recive content
    //download to download the file
    return res.send(logs.txt)
})

app.get("/logs", (req, res, next) => {
    const {
        mode
    } = req.query;
    if (!mode) return res.send("error! no log request method")
    if (mode === "file") return res.download("Users\\sheptus\\Documents\\GitKraken\\Node.js\\Node.js\\Lesson_2_31.10.19\\homeWork_L_2\\log.txt")
    else if (mode === "content") res.sendFile("Users\\sheptus\\Documents\\GitKraken\\Node.js\\Node.js\\Lesson_2_31.10.19\\homeWork_L_2\\log.txt")
    else return res.send("error! invalid log request method")
})


//? Class Practies

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
    // return res.download("Users\\sheptus\\Documents\\GitKraken\\Node.js\\Node.js\\Lesson_2_31.10.19\\homeWork_L_2\\log.txt")

})


// the serveer listen to some port with     callBack function 
app.listen(port, (err) => {
    if (err) console.log("Oppss some Error --:> " + err.message)
    console.log(`Server running on http://localhost:${port} `)

})