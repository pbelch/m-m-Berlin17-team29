'use strict';

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const imsMiddleware = require('ims-service-utils').imsMiddleware;
const path = require('path');

const props = {
  predixZoneId: process.env.IMS_PREDIX_ZONE_ID,
  subtenantId: process.env.IMS_SUBTENANT_ID,
  clientId: process.env.IMS_CLIENT_ID,
  clientSecret: process.env.IMS_CLIENT_SECRET,
  uaaInstanceId: process.env.IMS_UAA_INSTANCE_ID
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', imsMiddleware(props),);

app.use(express.static(__dirname))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});


/*const express = require('express');
const history = require('connect-history-api-fallback');
const serveStatic = require("serve-static");
const path = require('path');
const authentication = require('./src/utilities/authentication.js');
const sessionTools = require('./src/utilities/session-tools.js');
const configFile = require('./src/uaa-config.json');
const proxyAuth = require('./src/utilities/proxy-request.js');
const compression = require('compression');
var env;

switch(process.argv[2]){
  case "prod":
  env = configFile.prod;
  break;
  default:
  env = configFile.local;

}

app = express();
app.use(compression());
app.use(sessionTools.sessionWithAuthentication(env));
authentication.init(app,env);

proxyAuth.attachWithAuthentication(app, '/api', configFile.backendapi, '../../test/routes.js');

app.use(express.static(__dirname))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 3000;
app.listen(port);
console.log("app started on port "+port);*/
