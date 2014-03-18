'use strict';

var index = require('./controllers'),
  teams = require('./controllers/teams');
//api = require('./controllers/api'),

var middleware = require('./middleware');
/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  //app.get('/api/awesomeThings', api.awesomeThings);
  //app.get('/api/teams', teams.show);


  // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};
