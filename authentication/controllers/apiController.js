const fetch = require('node-fetch');
const apiController = {};

/**
 * Represents query results from an API
 * @constructor
 * @params {string} apiName - The name of the Api Queried
 * @params {string} data - The data that was returned from the api request
 * @params {string} time - The ellapsed time the api query took
*/

function ApiResult (apiName, data, time){
    this.api = apiName;
    this.results = data;
    this.time = time;
}

apiController.googleBooks = (req, res, next) => {
    // Checks to see if res.locals has an array so that this controller could be first in middleware chain if needed
    if (res.locals.data === undefined) 
      res.locals.data = [];

      // Create API Url with the given string from the client
      const url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.updatedString}&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU`
      
    //stores current time in variable
    const startTime = Date.now();
    // Making an external api request to get the book info from the given API
    fetch(url)
    .then(response => response.json())
    // When query is Sucessful, create new object representing api results and push to data's array in res.locals
    .then(data => {
        const apiResults = new ApiResult('Google Books API', data, `${Date.now() - startTime}ms`)
        res.locals.data.push(apiResults)
        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err =>{
        const apiResults = new ApiResult('Google Books API', 'Error Occurred with Google Books API', `${Date.now() - startTime}ms`);
        res.locals.data.push(apiResults)
        return next();
    })
} 

apiController.newYorkTimes = (req, res, next) => {    
    // Checks to see if res.locals has an array so that this controller could be first in middleware chain if needed
    if (res.locals.data === undefined) 
      res.locals.data = [];

    // Create API Url with the given string from the client
    const url = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${req.body.updatedString}&api-key=sdYVGp8NDwS0Q6WjF3uj6A3YxsYinxtX`

    const startTime = Date.now();
    // Making an external api request to get the book info from the given API
    fetch(url)
    .then(response => response.json())
     // When query is sucessful, create new object representing api results and push to data's array in res.locals
    .then(data => {
        const apiResults = new ApiResult('NYTimes API', data, `${Date.now() - startTime}ms`);
        res.locals.data.push(apiResults)
        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err => {
        const apiResults = new ApiResult('NYTimes API', 'Error Occurred with NYTimes API', `${Date.now() - startTime}ms`);
        res.locals.data.push(apiResults)
        return next();
    })
} 

//* OPENLIBRARY HAS ISSUES CONVERTING RESPONSE BODY TO JSON, CONTENT-TYPE IS APPEARING AS TEXT/HTML. WORKS FINE IN POSTMAN AND BROWSER.*/
apiController.openLibrary = (req, res, next) => {
    // Checks to see if res.locals has an array so that this controller could be first in middleware chain if needed
    if (res.locals.data === undefined) 
      res.locals.data = [];

    // Create API Url with the given string from the client
    const url = `http://openlibrary.org/search.json?title=${req.body.updatedString}`;
    const startTime = Date.now();

    // Making an external api request to get the book info from the given API
    fetch(url)
    .then(response => response.text() )
     // When query is sucessful, create new object representing api results and push to data's array in res.locals
    .then(data => {
        const apiResults = new ApiResult('Open Library Api', data, `${Date.now() - startTime}ms`);
        res.locals.data.push(apiResults)
        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err => {
        const apiResults = new ApiResult('Open Library Api', 'Error Occurred with Open Library API', `${Date.now() - startTime}ms`);
        res.locals.data.push(apiResults)
        return next();
    })
} 

module.exports = apiController