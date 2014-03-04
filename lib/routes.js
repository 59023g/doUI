'use strict';

var games = require('./controllers/games'),
  index = require('./controllers'),
  user = require('./controllers/user');

var middleware = require('./middleware');

module.exports = function(app) {
    app.get('/partials/*', index.partials);
    app.get('/*', middleware.setUserCookie, index.index);

};
