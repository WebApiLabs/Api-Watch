const User = require('../models/userModel');

const userController = {};

// Create a new user account
userController.createUser = (req, res, next) => {
  // console.log("req body username: ", req.body.username)
  // console.log("req body password: ", req.body.password)
  
  //Attempt To create a new User in the Database
  User.create({username: req.body.username, password: req.body.password}, (err, user) => {

    // When an error occurs send to Global Error Handler 
    if (err) {
      return next({
        log: 'userController.createUser',
        message: { err: 'userController.createUser: An error occurred' }
      });
    // When Sucessfull move to the next Middleware Function
    } else {
      res.locals.id =user._id. toString();
      console.log(res.locals.id);
      return next();
    }
  });
};

/**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/

userController.verifyUser = (req, res, next) => {
  // Attempt to find the User by username from the database
  User.findOne({username: req.body.username}, 'username password') 
    // The Query was sucessful
   .then(user => {
    // No User was found with the given username
    if (!user.username) {
      return next({
        log: 'userController.verifyUser',
        message: { err: 'Invalid Username or Password'}
      });
    }

    // A User was found with the given username validate the given password
    user.comparePw(req.body.password, function(err, passwordsMatch) {
      // When Passwords match, store user id into locals and move to the next middleware
      if (passwordsMatch) {
        res.locals.id = user._id.toString();
        return next()
      // When Passwords dont match, send an error to Error Handler
      } else {
        return next({
          log: 'userController.verifyPassword',
          message: { err: 'Invalid Username or Password'}
        })
      }
    }); 

   })
   // There was an Error Retrieving the User from the Database
   .catch(err => {
      return next({
        log: 'userController.verifyUser',
        message: { err: 'userController.verifyUser: An error occurred' }
      });
   })
};



module.exports = userController;