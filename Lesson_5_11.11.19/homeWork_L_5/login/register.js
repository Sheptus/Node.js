const express = require('express');
const router = express.Router();
const fileWriter = require('../utils/fileWriter');
const validation = require('../validation/validations')
const fs = require('fs')
const data = fs.readFileSync('../users.json')
const users = JSON.parse(data);

router.use('/', validation);

router.post('/register', (req, res, next) => {
    const {
        userName,
        password
    } = req.body;
    users.push({
        userName,
        password
    });
    fileWriter('../users.json', users);
    res.send("User registered successfully");
    console.log(users)
})


module.exports = router;