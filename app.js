/**
 * Module dependencies.
 */

var express = require('express'),
  path = require('path'),
  fs = require('fs'),
  mongoose = require('mongoose');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('./lib/config/config');

// Connect to database
var db = mongoose.connect(config.mongo.uri, config.mongo.options);


// Bootstrap models

//var modelsPath = path.join(__dirname, './lib/models');
require('./lib/models/games');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, './public/views'));
app.set('view engine', 'jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);

app.use(require('stylus').middleware(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './public')));

require('./lib/routes')(app);


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}



app.listen(config.port, function () {
  console.log('Express server listening on port %d in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
