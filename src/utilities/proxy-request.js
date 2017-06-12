const bodyParser = require('body-parser');
const express = require('express');
const proxy = require('http-proxy-middleware');

module.exports = {
  attachWithAuthentication: attachWithAuthentication,
  attachWithoutAuthentication: attachWithoutAuthentication
};

function attachWithAuthentication(app, localUrl, endpoint, fallbackIfEndPointMissing){
  if(endpoint) {
    app.use(
        localUrl,
        proxy(proxyOptionsWithAuthentication(endpoint))
    );
    console.log('info', 'Routes attached: ' + localUrl);
    return;
  }

  routeToFallback(app, localUrl, fallbackIfEndPointMissing);
}

/*function attachWithoutAuthentication(app, localUrl, endpoint, fallbackIfEndPointMissing){
  if(endpoint) {
    app.use(
        localUrl,
        proxy(proxyOptionsWithoutAuthentication(endpoint))
    );
    console.log('info', 'Routes attached: ' + localUrl);
    return;
  }

  routeToFallback(app, localUrl, fallbackIfEndPointMissing);
}*/

function routeToFallback(app, localUrl, fallbackIfEndPointMissing) {
  app.use(bodyParser.json());
  app.use(localUrl, require(fallbackIfEndPointMissing)(express));
}

function proxyOptionsWithAuthentication(endpoint) {
  console.log('info', `Preparing proxy with authentication for endpoint ${endpoint}.`);
  return {
    target: endpoint,
    changeOrigin: true,
    onProxyReq: (proxyReq, req, res) => {
      var token = req.session.token;
      if (!token){
        console.log('error', `Retrieved token from session is invalid.`);
        res.sendStatus(401);
      }
      proxyReq.setHeader(
        'Authorization',
        token.token_type + ' ' + token.access_token
      );
    }
  };
}

function proxyOptionsWithoutAuthentication(endpoint) {
  console.log('info', `Preparing proxy for endpoint ${endpoint}.`);
  return {
    target: endpoint,
    changeOrigin: true
  };
}
