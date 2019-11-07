//
//
const logger = require("./index");

logger.writeToFileSync("./log.txt", "test for writing logs")
console.log("process done")