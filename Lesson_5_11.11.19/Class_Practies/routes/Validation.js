const express = require('express');
const router = express.Router();
const FLights = require("./flights")

const users = {}

router.use('/flights', (req, res, next) => {
    const {
        key,
    } = req.query;
    const timeStamp = moment().format('x')
    if (!users[key]) return res.status(401).send("Unauthorized user")
    if (timeStamp - 60000 > users[key]) {
        delete users[key];
        return res.status(401).res.send("Your key is expierd / Unauthorized user")
    }
    next()
})

module.exports = router;