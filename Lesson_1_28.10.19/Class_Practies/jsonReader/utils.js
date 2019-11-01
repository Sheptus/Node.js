const fs = require("fs")
function readJson(path) {
    const result = fs.readFileSync(path, "utf8");
    try {
        return JSON.parse(result)
    }
    catch (ex) {
        console.log(ex.message);
        return "Error from Reading JSON"
    }
}
module.exports = { readJson }
