 // minimal package for creating web server
 //
 //

 const express = require("express")
 const api = express()
 const port = 4000;


 api.get('/', (req, res, next) => {
     return res.send('hello world');
 });

 api.listen(port, () => {
     console.log(`APP RUNNING ON PORT ${port}`);
 });