const express = require("express")
const router = express.Router();
const logger = require("../utils/logger")


router.get("/", (req, res, next) => {

    res.json({ flights: ["f1", "f2"] })
})
router.post("/", (req, res, next) => {
    res.json({ message: "vacations saved" })
})



module.exports = router;