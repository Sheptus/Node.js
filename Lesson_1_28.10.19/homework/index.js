//
//
//App logger 

const fs = require("fs")

module.exports = {
    writeToFile: (filePath, str) => {
        fs.appendFile(filePath, str + "\n", (err) => {
            if (err) console.log(err)
        })
    },
    writeToFileSync: (filePath, str) => {
        return fs.appendFileSync(filePath, str + "\n")
    }
}