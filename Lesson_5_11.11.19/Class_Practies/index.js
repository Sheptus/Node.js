//
//* packages for creating web server
require("dotenv").config()
const express = require('express');
const bodyParser = require("body-parser");
// const moment = require('moment');
// const fs = require('fs');


//* Varibals 
const api = express();
// const port = process.env.PORT || 5000
const authRouter = require("./routes/auth");
const validation = require("./routes/Validation")
const flightsRouter = require("./routes/flights")
const logger = require("./utils/logger");


api.use(bodyParser.json());
api.use("/auth", authRouter);
api.use("/flights", flightsRouter);



api.listen(process.env.PORT || 5000, () => {
    logger.info(`server is listening to port: ${process.env.PORT}`)
    console.log(process.env.PORT);
})