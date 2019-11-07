const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const moment = require("moment");
const fileWriter = require("s_file_writer");
const api = express();
const port = 5000;
const users = JSON.parse(fs.readFileSync("./data.json", "utf8"));
//  const users = []

console.log(users);

api.use(bodyParser.json());

api.use((req, res, next) => {
    console.log(`inside middleware:  ${req.originalUrl}`);
    const currentDate = moment().format("DD:MM:YYYY-hh:mm:ss");
    fileWriter("log.txt", `[${currentDate}]-PATH:${req.originalUrl}-IP${req.ip}`);
    // console.log(fileWriter + " 11 fileWriter");
    next();
});

api.get("/", (req, res, next) => {
    console.log("hellow world");
    return res.send("hello world 2");
});
api.post("/user/register ", (req, res, next) => {
    console.log("user");
    const {
        userName,
        email,
        password,
        firstName,
        lastName
    } = req.body;
    //no need for user validation if users empty array
    if (users.length > 0) {
        const foundUser = users.find(user => {
            return user.userName === userName;
        });
        if (foundUser) return res.send("user already exist");
    }
    const newUser = {
        userName,
        email,
        password,
        firstName,
        lastName
    };
    console.log(newUser);

    users.push({
        userName,
        email,
        password,
        firstName,
        lastName
    });

    let data = JSON.stringify(users, null, 2);
    fs.writeFileSync("data.json", data, err => {
        if (err) throw err;
        console.log("Data written to file");
    });

    return res.send(newUser);

});

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