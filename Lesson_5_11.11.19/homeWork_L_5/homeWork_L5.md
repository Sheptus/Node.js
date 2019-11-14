<!-- HomeWork Lesson 5  -->

Nodejs Express Validation
Use @hapi/joi package for validations

Before you start:
Create a see function that will create for you an array of data:

- Object flights
  o Departure – datetime format
  o Arrival – datetime format
  o From – country string (api)
  o Destination – country string (api)
  o Company (serch some api or generate from array with few)

1. Validate the Login and register,
   a. username – length min 5 max – 10 ( regex, must contain at least 1 special character ! or @ or # or \$)
   b. password – exactly 16 characters.
2. getFlights - GET
   a. departure – datetime
   b. arrival – datetime
   filter and response with the flights between requested time range
   c. validate with Joi the relevant query params
3. saveFlights – POST
   a. adding multiple flights objects (or 1 inside array)
   b. validate with Joi the relevant schema [{flight},{flight}…..]
