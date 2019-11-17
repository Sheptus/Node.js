const express = require("express")
const router = express.Router();
const loginValid = require('../validations/loginValid');
const userValid = require('../validations/loginValid')

const sessions = require('../sessions/sessions')

router.use('/login', loginValid);

router.post('/login', (req, res, next) => {
    const {
        userName
    } = req.body;
    const generateSession = `session-${Math.round(Math.random() * 999999)}`;
    sessions[generateSession] = Date.now() + 100000;
    res.json({
        session: sessions[generateSession],
        message: `welcome user ${userName} you logged in`,
        redirect: true
    });
});

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