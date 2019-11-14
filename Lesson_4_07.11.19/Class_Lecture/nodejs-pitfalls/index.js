// minimal package for creating web server
const express = require("express")
const api = express()
const port = 4001;


function Queue() {
    this.arr = [];
}
Queue.prototype.getElementFromQ = function () {
    this.arr[0];
    this.arr.splice(0, 1)
}
Queue.prototype.pushToQue = function (e) {
    this.arr.push(e)
}

class Queue2 {
    constructor(data) {
        this.data = []
    }
    getFromQ() {
        this.data[this.data.length - 1];
        this.data.pop();
    }
    insertToQ(e) {
        this.data = [e, ...this.data]
    }

}


api.get("/a", async (req, res, next) => {
    for (let index = 0; index < 9999999999; index++) {
    }
    res.send("result... = > 555555")
})
api.get("/b", (req, res, next) => {
    res.send("result... = > 555555")
})

api.listen(port, (err) => {
    if (err) console.log(err.message)
    console.log(`Api listening to port: ${port} `)
})

