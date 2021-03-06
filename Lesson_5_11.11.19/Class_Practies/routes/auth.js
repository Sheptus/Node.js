const express = require('express')
const router = express.Router();
const moment = require('moment')
const users = {};
const flightsRouter = require('./flights')
const logger = require('../utils/logger')


router.use('/Register', (req, res, next) => {
    const {
        userName,
        email,
        password,
    } = req.body;
    if (!userName || !email || !password) {
        res.send("Some value is missing...")
    }
    if (!email.includes("@")) return res.send("Email address is not valid");
    next()
})

router.post('/Register', (req, res, next) => {
    const apiKey = getApiKey()
    const expiration = moment().format('x')

    users[apiKey] = expiration

    logger.info(`a new API Key: ${apiKey} was generated for a user ${users.userName}`)
    res.send(`Register success - your key is ${apiKey}`)
})

1

function getApiKey() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

router.use('/flights', (req, res, next) => {
    const {
        key
    } = req.query;
    const timeStamp = moment().format('x')
    if (!users[key]) return res.status(401).send("Unauthorized user")
    if (timeStamp - 60000 > users[key]) {
        delete users[key];
        return res.status(401).res.send("Your key is expierd / Unauthorized user")
    }
    next()
})

router.get('/flights', flightsRouter)


module.exports = router;