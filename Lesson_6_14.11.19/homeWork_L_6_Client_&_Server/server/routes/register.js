const express = require("express")
const router = express.Router();

const userValid = require('../validations/loginValid')
const usersData = require('../data/users.js');

router.use('/register', userValid);

router.post('/register', (req, res, next) => {
    const {
        userName,
        password,
        email
    } = req.body;
    console.log(req.originalUrl);
    console.log(req.body);
    usersData[userName] = {
        userName,
        password,
        email
    };
    return res.json({
        message: `${userName} succefully registered...`,
        redirect: true
    });
});


module.exports = router;