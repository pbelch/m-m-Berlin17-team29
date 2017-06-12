const jwtDecode = require('jwt-decode');

function init(app,configFile) {
  const credentials = {
    client: {
      id: configFile.clientID,
      secret: configFile.clientSecret,
    },
    auth: {
      tokenHost: "https://9cf35a7b-02c9-4321-99e7-dbe22ed2bc13.predix-uaa.run.aws-usw02-pr.ice.predix.io",
      tokenPath: '/oauth/token',
      authorizePath: '/oauth/authorize'
    }
  };
  const oauth2 = require('simple-oauth2').create(credentials);
  const redirectUrl = configFile.redirectUri;
  const authorization_uri = oauth2.authorizationCode.authorizeURL({
    redirect_uri: redirectUrl
  });

  app.get('/logout', (req, res) => {
    res.redirect(303, '/logout');
    req.session.destroy();
  });

  app.get('/redirect', (req, res) => {
    const tokenConfig = {
      code: req.query.code,
      redirect_uri: redirectUrl
    };

    oauth2.authorizationCode.getToken(tokenConfig)
      .then(
        (obtainedOauth2Token) => {
        console.log('info', 'Session token obtained.');
        setSessionAndOauthToken(req, obtainedOauth2Token);
        logTokenInfo(req.session.token);
        obtainUserRolesAndSetSession(req, res, req.session.token.access_token, () => {
          if(req.session.origUrl) {
            res.redirect(req.session.origUrl);
          }
          else {
            res.redirect('/');
          }
        });
      });
  });

  app.all('*', function (req, res, next) {
    if (!req.session.token) {
      redirect(req, res);
    } else {
      const oauth2Token = oauth2.accessToken.create(req.session.token);
      if(oauth2Token.expired()) {
        oauth2Token.refresh()
          .then((obtainedOauth2Token) => {
            console.log('info', 'Token refreshed successfully.');
            success();
          })
          .catch((error) => {
            console.log('error', `Error occurred during token refresh, details ${error}.`);
            res.redirect(authorization_uri);
          });
      }
      else {
        next();
      }
    }
  });



function setSessionAndCookieRoles(req, res) {
   res.cookie( configFile.cookieName, new Buffer(configFile.cookieSecret.toString('base64')));
 }

  function obtainUserRolesAndSetSession(req, res, token, success) {
       setSessionAndCookieRoles(req, res);
       success();

 }

  function redirect(req, res) {
    console.log('info', `User without a valid token connected on ${req.originalUrl}, redirecting to authorization url.`);
    req.session.origUrl = req.originalUrl;
    res.redirect(authorization_uri);
  }

  function setSessionAndOauthToken(req, obtainedOauth2Token) {
    req.session.token = obtainedOauth2Token;
  }

  function logTokenInfo(token) {
    const decodedToken = jwtDecode(token.access_token);
    const tokenHash = token.access_token.split('.')[2];
    const tokenInformation = {
      'session-token-hash': tokenHash,
      'jti': JSON.stringify(decodedToken.jti),
      'subject': decodedToken.sub,
      'username': decodedToken.user_name,
      'audience': decodedToken.aud,
      'issued-at-time': decodedToken.iat,
      'expiration-time': decodedToken.exp,
      'current-local-time': new Date().getTime(),
    };
    console.log('info', `Token information ${JSON.stringify(tokenInformation)}`);
  }


}

module.exports = {
  init: init
};
