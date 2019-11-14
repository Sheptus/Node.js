//\\
const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()

//\\
const userLogin = require('./Auth/userLogin')
const userRegister = require('./Auth/userReg')
//\\
const app = express();
const logger = require("./utils/logger");


//\\
app.use(bodyParser.json());

app.use('/', userLogin);
api.use('/', userRegister);
// api.use('/', getCountry);
// api.use('/', registerUser);
// api.use('/', getFlights);
// api.use('/', saveFlights);


app.listen(process.env.PORT || 4000, () => {
    logger.info(`server is listening to port: ${process.env.PORT}`)
    console.log(process.env.PORT);
})