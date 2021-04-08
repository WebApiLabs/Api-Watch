const fetch = require('node-fetch');
const apiController = {};

<<<<<<< HEAD
=======

>>>>>>> 9012156cacc00c2b584a10d2486cf624cebe1cfd
// function ApiResult (apiName, data, time){
//     this.api = apiName;
//     this.results = data;
//     this.time = time;
// }

apiController.googleBooks = (req, res, next) => {
    // Checks to see if res.locals has an array so that this controller could be first in middleware chain if needed
    if (res.locals.data === undefined) 
      res.locals.data = [];

    // Create API Url with the given string from the client
    const url = `https://www.googleapis.com/books/v1/volumes?q=${req.body.updatedString}&key=AIzaSyCKP8TdjmMKlVeQFAh7oITw8OdUBBID2VU`

    // Making an external api request to get the book info from the given API
    fetch(url)
    .then(response => response.json())
    // When query is Sucessful, create new object representing api results and push to data's array in res.locals
    .then(data => {
        const apiResults = {
            api: 'Google Books API',
            results: data,
            time: 100
        }
        res.locals.data.push(apiResults)

        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err =>{
        const apiResults = {
            api: 'Google Books API',
            results: 'Error Occurred with Google Books API',
            time: 100
        }
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

    // Making an external api request to get the book info from the given API
    fetch(url)
<<<<<<< HEAD
=======
    .then(response => {        
        // return JSON.parse(response); 
         return response.json(); 
    })
     // When query is sucessful, create new object representing api results and push to data's array in res.locals
    .then(data => {
        const apiResults = {
            api: 'NYTimes API',
            results: data,
            time: 100
        }
        res.locals.data.push(apiResults)
        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err => {
        const apiResults = {
            api: 'NYTimes API',
            results: 'Error Occurred with NYTimes API',
            time: 100
        }
        res.locals.data.push(apiResults)
        return next();
    })
} 

apiController.openLibrary = (req, res, next) => {
    // Checks to see if res.locals has an array so that this controller could be first in middleware chain if needed
    if (res.locals.data === undefined) 
      res.locals.data = [];

    // Create API Url with the given string from the client
    const url = `http://openlibrary.org/search.json?title=${req.body.updatedString.split(' ').join('+')}`;

    // Making an external api request to get the book info from the given API
    fetch(url)
>>>>>>> 9012156cacc00c2b584a10d2486cf624cebe1cfd
    .then(response => {        
        // return JSON.parse(response); 
         return response.json(); 
    })
     // When query is sucessful, create new object representing api results and push to data's array in res.locals
    .then(data => {
        const apiResults = {
<<<<<<< HEAD
            api: 'NYTimes API',
            results: data,
            time: 100
        }
        res.locals.data.push(apiResults)
        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err => {
        const apiResults = {
            api: 'NYTimes API',
            results: 'Error Occurred with NYTimes API',
            time: 100
        }
        res.locals.data.push(apiResults)
        return next();
    })
} 

apiController.openLibrary = (req, res, next) => {
    // Checks to see if res.locals has an array so that this controller could be first in middleware chain if needed
    if (res.locals.data === undefined) 
      res.locals.data = [];

    // Create API Url with the given string from the client
    const url = `http://openlibrary.org/search.json?title=${req.body.updatedString.split(' ').join('+')}`;

    // Making an external api request to get the book info from the given API
    fetch(url)
    .then(response => {        
        // return JSON.parse(response); 
         return response.json(); 
    })
     // When query is sucessful, create new object representing api results and push to data's array in res.locals
    .then(data => {
        const apiResults = {
=======
>>>>>>> 9012156cacc00c2b584a10d2486cf624cebe1cfd
            api: 'Open Library Api',
            results: data,
            time: 100
        }
        res.locals.data.push(apiResults)
        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err => {
        const apiResults = {
            api: 'Open Library Api',
            results: 'Error Occurred with Open Library API',
            time: 100
        }
        res.locals.data.push(apiResults)
        return next();
    })
} 

module.exports = apiController