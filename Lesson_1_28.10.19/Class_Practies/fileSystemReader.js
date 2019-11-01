const fs = require("fs")

// read json file
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
function printUsers({ users }) {
    if (!Array.isArray(users)) {
        console.log("error")
        return;
    }
    users.map(user => console.log(user))
}

const users = readJson('./some.json');
printUsers(users)