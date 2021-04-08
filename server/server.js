const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 3000;

const Session = require('../authentication/models/sessionModel');


const mongoose = require('mongoose');

const userController = require('../authentication/controllers/userController');
const cookieController = require('../authentication/controllers/cookieController');
const sessionController = require('../authentication/controllers/sessionController');
const apiController = require('../authentication/controllers/apiController');

// Mongoose Database connection
const mongoURI = 'mongodb://localhost/API-Gateway';   
mongoose.connect(mongoURI, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('Successfully Connected to Mongoose Database') 
});

// express parsers
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())


// Initial Request Servers the React App
app.get('/', (req, res) => res.status(200).sendFile(path.join(__dirname, '../client/index.html')) );

// Sends a boolean object to the front end to check if the user is currently logged in or not (has an active session)
app.get('/isLoggedIn',
    sessionController.isLoggedin,
    (req, res) =>  res.json({isLoggedIn: res.locals.hasSession})
)

// get the user signin information from frontend to login
// login information is inside request body
app.post('/signup', 
    userController.createUser,
    cookieController.setSSIDCookie,  
    sessionController.startSession, 
    (req, res) => {
        res.status(200).json({ signupFail: false });
    }
);

//When search button is clicked on front end, sends a POST request to /search endpoint
    //middleware gets results from various apis, stores data in an array and sends data back to client
app.post('/search', 
    apiController.googleBooks,
    apiController.newYorkTimes,
    apiController.openLibrary,
    (req, res) => res.status(200).json(res.locals.data)
)

// verify user is logged in. no subsequent middleware is activated unless user is verified. float the 
// check for verification at the last middleware, where it can be directed to different endpoints depending on the state of successful login
app.post('/login', 
    userController.verifyUser, 
    cookieController.setSSIDCookie,  
    sessionController.startSession, 
    (req, res) =>  res.status(200).json({ loginFail: false })
);

// handle unrecognized requests with 404
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

// Global Error Handler
 app.use((err, req, res, next) => {
    // Template for the incoming Error
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };

    // Formating the incoming Error to match the template
    const errorObj = Object.assign({}, defaultErr, err);

    console.log('Local Obj: ', res.locals)
    console.log('Error Object: ', errorObj);

    // Talk to Front End to find out what we are sending back
    return res.status(errorObj.status).json(errorObj.message);
  });



app.listen(port, () =>  console.log(`Example app listening at http://localhost:${port}`))