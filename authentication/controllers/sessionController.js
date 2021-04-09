const Session = require('../models/sessionModel');

const sessionController = {};


// Checks if the User has an active session or not
sessionController.isLoggedin = (req, res, next) => {
  //check to see if cookie exists
  if(req.cookies.ssid) {
    Session.findOne({cookieId: req.cookies.ssid})
    .then(session => {session.cookieId ? res.locals.hasSession = true : res.locals.hasSession = false; next();})
    .catch(err => {res.locals.hasSession = false; next()})
  } else {
    //if there is not a cookie, res.locals.isloggedIn = false, invoke next
    res.locals.hasSession = false;
    next();
  }
}

// Starts a Session for a user when they login or signup
sessionController.startSession = (req, res, next) => {
  // Attempts to update a Session in the database, with the current time
  // If the Session does not exist in the database, create a new Session automatically
  Session.findOneAndUpdate({cookieId: res.locals.id}, {createAt: Date.now()}, {new: true, upsert: true})
    // When Sucessful move to the next Middleware Function
    .then((session => next()))
    // When an Error occurs, redirect to global error handler
    .catch(err => {
      return next({
        log: 'Express error handler caught unknown middleware error',
        message: { err: 'An error occurred when starting a Session' }
        });
    })
};

module.exports = sessionController;