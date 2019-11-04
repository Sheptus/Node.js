// using node cli - can execute javascript code
// node FILENAME.js => will execute the javascript code

const fs = require("fs")
console.log("script start")
const name = "gal";
console.log(name);

fs.readFile('./some.txt', "utf8", (err, data) => {
    if (err) throw err;
    console.log("async read file:", data);
});

const result = fs.readFileSync('./some.txt', "utf8");
console.log(result)

console.log("script end 2 ")



// setInterval(() => {
//     console.log("this is running...")
// }, 1000);

//node js code application
// our code + community code + nodejs core

// npm install
// import package
