const session = require('express-session');


module.exports = {
  sessionWithAuthentication: sessionWithAuthentication
};

function sessionWithAuthentication(configFile) {

  return session({
    saveUninitialized: false,
    resave: false,
    secret: configFile.sessionSecret,
    cookie: cookieOptions()
  });

  /* implementation */
  function cookieOptions() {
    var cookieOpts = {
        httpOnly: true,
        domain:  configFile.baseUrl
      };
    }

  }
