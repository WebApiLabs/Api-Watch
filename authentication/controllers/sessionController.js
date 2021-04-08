const Session = require('../models/sessionModel');

const sessionController = {};

//BEFORE
// sessionController.verifyLogin = (req, res, next) => {

//   // verify user has ssid cookie
//   if (!Object.prototype.hasOwnProperty.call(req.cookies,'ssid')){
//     // if cookie not found, 
//     res.locals.reactToken = false;
//     return next();

//   } else {
//     // if cookie is found, get the session 
//     Session.findOne({cookieId: req.cookies.ssid}, (err,session) => {
//       if(err) return next({err: 'error in session find one in session controller'});
//       // if session isnt found return to main page without REACT TOKEN
//       if(!session){
//         res.locals.reactToken = false;
//         console.log('no session found');
//       }
//       // go to front page serving no matter state of REACT TOKEN 
//       return next();
//     });
//   }
// }

//AFTER

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


sessionController.startSession = (req, res, next) => {    
  if (res.locals.signupFail) return next();
  if (res.locals.loginFail) return next();
  Session.findOne({cookieId: res.locals.id}, (err, session) => {
    if(session){
      return next();
    }
    else {
      Session.create({cookieId: res.locals.id}, (err, session) => {
        if (err) {
          return next({err: 'Error in start session'});
        }
        else { 
          console.log('created session')
          return next();
        } 
      });
    }
  });
};

module.exports = sessionController;