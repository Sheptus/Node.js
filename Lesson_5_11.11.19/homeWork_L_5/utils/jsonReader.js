const fs = require('fs')

function jsonReader(file) {
    const data = fs.readFileSync(file, (err) => {
        const parseData = JSON.parse(data);
        if (err) return console.log(err.message);
        return parseData;
    })
}


module.exports = jsonReader;