const express = require('express');
const api = express();
const port = 3006;
const fs = require('fs');
//read users array from json file
const users = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
const bodyParser = require('body-parser');
const moment = require('moment');
const myFileWriter = require('vladi-file-writer');

// console.log(users.length);
console.log(users);
//middleware for body of request
api.use(bodyParser.json());
//middleware for writing to log.txt
api.use((req, res, next) => {
    console.log(`inside middleware:  ${req.path}`);
    const currentDate = moment().format('MMM Do YYYY, h:mm:ss a');
    myFileWriter('log.txt', `PATH: ${req.path} - TIME: ${currentDate} - IP: ${req.ip}`);
    // fs.writeFileSync('log.txt', `PATH: ${req.path} - TIME: ${currentDate}`, (err) => {
    // 	if (err) throw err;
    // 	console.log('Data written to file');
    // });
    next();
});

api.get('/', (req, res, next) => {
    console.log('hellow world');
    return res.send('hello world 2');
});
// register route
api.post('/register', (req, res, next) => {
    const {
        userName,
        email,
        password,
        firstName,
        lastName
    } = req.body;
    //no need for user validation if users empty array
    if (users.length > 0) {
        const foundUser = users.find((user) => {
            return user.userName === userName;
        });
        if (foundUser) return res.send('user already exist');
    }
    const newUser = {
        userName,
        email,
        password,
        firstName,
        lastName
    };
    console.log(newUser);
    //turn file to json in order to store into txt

    users.push({
        userName,
        email,
        password,
        firstName,
        lastName
    });
    let data = JSON.stringify(users, null, 2);
    fs.writeFileSync('data.json', data, (err) => {
        if (err) throw err;
        console.log('Data written to file');
    });

    return res.send(newUser);
    // console.log(users);
});

//login route
api.post('/login', (req, res, next) => {
    const {
        userName,
        password
    } = req.body;
    const foundUser = users.find((user) => {
        return user.userName === userName;
    });
    //if no user were found
    if (!foundUser) return res.send('user not exist');
    //check if password correct
    if (foundUser.password === password) return res.send('user succefully loged in');
    else return res.send('wrong password');
});
//admin route
api.get('/admin/users', (req, res, next) => {
    return res.download('data.json');
});

api.listen(port, () => {
    console.log(`APP RUNNING ON PORT ${port}`);
});