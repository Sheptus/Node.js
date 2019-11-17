//.env setup
require('dotenv').config();

const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const authRouter = require("./routes/auth");
const moment = require('moment');
const logger = require("./utils/logger");
const cors = require("cors");



//alow cross origin requests
app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
// app.use("/register", Registration);

app.get('/auth', (req, res, next) => {
    const time = moment().format('MMMM Do YYYY, h:mm:ss a');
    logger.info(`test logger at ${time}`);
    res.send('hello world');

});


app.listen(process.env.PORT || 4000, () => {
    logger.info(`server is listening to port: ${process.env.PORT}`)
    console.log(process.env.PORT);


});