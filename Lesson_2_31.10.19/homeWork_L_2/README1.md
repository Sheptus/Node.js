//

# Lesson 2 HomeWork:

Use Express Module to implement an api

Use data structure of cars from the following link:
https://github.com/vega/vega/blob/master/docs/data/cars.json
create json file in your project and copy the content from the internet
cars.json into your project
use const cars = require(“cars.json”) to work with the data

1. GET /cars , return an array of all the cars
2. In each request to /cars – write to log file the time + the request url
3. GET /logs?mode=VALUE – download the logs to your client
   a. VALUE can be – “file” OR “content”
   b. In case of “file” you will use res.download(FILE PATH) to
   download the logs file to your pc
   c. In case of content you will send the content of the file
   d. In case there is no param value or valida value – content or file
   You will send the user an error
