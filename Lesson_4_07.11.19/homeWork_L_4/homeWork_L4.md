Home Work – Nodejs API -Winston and Router

Use the following packages to create a nodejs API

1. Express - https://expressjs.com/en/api.html
2. Moment.js - https://momentjs.com/
3. Body parser – search in npm (or from express)
4. Router api
5. Winston logger
   On the next exercise you will use a dynamic authentication with different keys
   API

1) Create an api with the following entry points
2) generateKey – post request registers the user
   a. Body:
   i. userName
   ii. email
   iii. password
   iv. firstName
   v. lastName

Validate the parameters
Response with generated api key (use GUID function from )
function uuidv4() {
return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
var r = Math.random() \* 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
return v.toString(16);
});
}

Save the api key inside an object with expiration time of 2 min
For example

apiKyes: { “055901af-aad0-4ecb-875a-e64a140118e2”: 1573162202343 }

Return the api key to the client

3. getFlights , Get request that return some list of flights, user must have an validated api key that not expired
   if the api key is not exist or expired return the user 401 status
   if the api key is ok return the relevant data
   make sure to remove an expired key from the object
   object will be saved on memory
4. log every user that receives api key

\*\* make sure to split functionality the common logics to seperated modules
