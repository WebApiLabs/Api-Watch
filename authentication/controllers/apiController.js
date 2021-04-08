const fetch = require('node-fetch');
const apiController = {};


// function ApiResult (apiName, data, time){
//     this.api = apiName;
//     this.results = data;
//     this.time = time;
// }

function ApiResult (apiName, data, time){
    this.api = apiName;
    this.results = data;
    this.time = time;
}


apiController.googleBooks = (req, res, next) => {
    console.log('Google Books Hit');
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
        
        // const apiResults = {
        //     api: 'Google Books API',
        //     results: data,
        //     time: `${Date.now() - startTime}ms`
        // }
        const apiResults = new ApiResult('Google Books API', data, `${Date.now() - startTime}ms`)
        res.locals.data.push(apiResults)
        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err =>{
        // const apiResults = {
        //     api: 'Google Books API',
        //     results: 'Error Occurred with Google Books API',
        //     time: `${Date.now() - startTime}ms`
        // }
        const apiResults = new ApiResult('Google Books API', 'Error Occurred with Google Books API', `${Date.now() - startTime}ms`);
        res.locals.data.push(apiResults)
        return next();
    })
} 

apiController.newYorkTimes = (req, res, next) => {
    console.log('New York Times Hit');
    // Checks to see if res.locals has an array so that this controller could be first in middleware chain if needed
    if (res.locals.data === undefined) 
      res.locals.data = [];

    // Create API Url with the given string from the client
    const url = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${req.body.updatedString}&api-key=sdYVGp8NDwS0Q6WjF3uj6A3YxsYinxtX`

    const startTime = Date.now();
    // Making an external api request to get the book info from the given API
    fetch(url)
    .then(response => {        
        // return JSON.parse(response); 
         return response.json(); 
    })
     // When query is sucessful, create new object representing api results and push to data's array in res.locals
    .then(data => {
        // const apiResults = {
        //     api: 'NYTimes API',
        //     results: data,
        //     time: `${Date.now() - startTime}ms`
        // }
        const apiResults = new ApiResult('NYTimes API', data, `${Date.now() - startTime}ms`);
        res.locals.data.push(apiResults)
        return next();
    })
    // When Unsucessful, Push a new Object representing data about the api with the error message as the result
    .catch(err => {
        // const apiResults = {
        //     api: 'NYTimes API',
        //     results: 'Error Occurred with NYTimes API',
        //     time: `${Date.now() - startTime}ms`
        // }
        const apiResults = new ApiResult('NYTimes API', 'Error Occurred with NYTimes API', `${Date.now() - startTime}ms`);
        res.locals.data.push(apiResults)
        return next();
    })
} 

//* OPENLIBRARY HAS ISSUES CONVERTING RESPONSE BODY TO JSON, CONTENT-TYPE IS APPEARING AS TEXT/HTML. WORKS FINE IN POSTMAN AND BROWSER.*/

// apiController.openLibrary = (req, res, next) => {
//     // Checks to see if res.locals has an array so that this controller could be first in middleware chain if needed
//     if (res.locals.data === undefined) 
//       res.locals.data = [];

//     // Making an external api request to get the book info from the given API
//     fetch(url)

//     .then(response => {        
//         // return JSON.parse(response); 
//          return response.json(); 
//     })
//      // When query is sucessful, create new object representing api results and push to data's array in res.locals
//     .then(data => {
//         const apiResults = {
//             api: 'Open Library Api',
//             results: data,
//             time: 100
//         }
//         res.locals.data.push(apiResults)
//         return next();
//     })
//     // When Unsucessful, Push a new Object representing data about the api with the error message as the result
//     .catch(err => {
//         const apiResults = {
//             api: 'Open Library Api',
//             results: 'Error Occurred with Open Library API',
//             time: 100
//         }
//         res.locals.data.push(apiResults)
//         return next();
//     })
// } 

//     // Create API Url with the given string from the client
//     const url = `http://openlibrary.org/search.json?title=${req.body.updatedString}`;
//     // console.log(url);

//     const startTime = Date.now();
//     // Making an external api request to get the book info from the given API
    
//     fetch(url)
//     .then(response => {        
//         // return JSON.parse(response); 
//         // console.log('First Then: ', response.headers);
//          return response.text(); 
//     })
//      // When query is sucessful, create new object representing api results and push to data's array in res.locals
//     .then(data => {
//         // const apiResults = {
//         //     api: 'Open Library Api',
//         //     results: data,
//         //     time: `${Date.now() - startTime}ms`
//         // }
//         console.log('Second Then', data);
//         const apiResults = new ApiResult('Open Library Api', data, `${Date.now() - startTime}ms`);
//         res.locals.data.push(apiResults)
//         return next();
//     })
//     // When Unsucessful, Push a new Object representing data about the api with the error message as the result
//     .catch(err => {
//         // const apiResults = {
//         //     api: 'Open Library Api',
//         //     results: 'Error Occurred with Open Library API',
//         //     time: `${Date.now() - startTime}ms`
//         // }
//         console.log('Inside Catch', err);
//         const apiResults = new ApiResult('Open Library Api', 'Error Occurred with Open Library API', `${Date.now() - startTime}ms`);
//         res.locals.data.push(apiResults)
//         return next();
//     })
// } 

module.exports = apiController