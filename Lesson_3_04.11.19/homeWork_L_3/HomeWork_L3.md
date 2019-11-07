//
///
//

# Lesson 3 HomeWork - Nodejs API:

## Use the following packages to create a nodejs API

1. Express - https://expressjs.com/en/api.html
2. Moment.js - https://momentjs.com/
3. Body parser – search in npm (or from express)
4. Fs – core module

## API

1. Create an api with the following entry points

2. User/register – post request registers the user

   #### Body:

   i. userName
   ii. email
   iii. password
   iv. firstName
   v. lastName

   Validate the parameters
   If the user is valid and not already exists,
   save the user inside a json file.
   The users array data should be persistent and not on the memory
   If the server restarts the user’s data should be saved (json file)

3. User/login – post request
   a. username
   b. password
   validate the params
   check if user exists
   return appropriate message

4. admin/users
   a. Get request for admins, no validation required, but only download the users.json file

5. Create a middleware that writing to a log.txt file each request that incomes to the server in separated line
   for example : [DATE] – PATH , from ip: [IP]
   extract the path and ip from the req object, and use moment to generate the current date in a format DD-YY-MM hh:mm:ss

\*\* make sure to split functionality the common logics to seperated modules
