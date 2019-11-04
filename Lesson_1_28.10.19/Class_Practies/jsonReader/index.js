// we will run npm init first
// to create our npm package.json

// install axios
// require axios
// use axios

// const axios = require("axios")
// axios.get("https://restcountries.eu/rest/v2/all").then(res => console.log(res.data[0].name))
const utils = require("./utils")
module.exports = { ...utils };

