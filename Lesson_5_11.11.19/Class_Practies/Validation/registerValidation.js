const logger = require("../utils/logger");

module.exports = (req, res, next) => {
    const user {
        userName,
        password,
        email,
    } = req.query;
    if (user === process.env.API_KEY) return next()
    logger.error(`userName: ${userName} is not valid ${req.ip} `)
    return res.status(401).send("key is not valid")
}