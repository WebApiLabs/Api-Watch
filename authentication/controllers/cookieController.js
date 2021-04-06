const cookieController = {};

/**
* setCookie - set a cookie with a random number
*/
// cookieController.setCookie = (req, res, next) => {

// return next();
// }


/**
* setSSIDCookie - store the user id in a cookie
*/
cookieController.setSSIDCookie = (req, res, next) => {
  if (res.locals.signupFail) return next();
  res.cookie('ssid', res.locals.id, {
    httpOnly: true
  })

  return next();   
}

module.exports = cookieController;    
