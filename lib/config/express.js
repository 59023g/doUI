'use strict';

var express = require('express'),
  path = require('path'),
  config = require('./config'),
  mongoStore = require('connect-mongo')(express),
  nib = require('nib'),
  stylus = require('stylus');


/**
 * Express configuration
 */
module.exports = function(app) {
  app.configure('development', function() {
    //app.use(require('connect-livereload')());

    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });
    app.use(express.static(path.join(config.root, 'public')));
    app.use(express.errorHandler());
    app.set('views', config.root + '/public/views');



  })


  app.configure(function() {
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(require('stylus').middleware(path.join(__dirname, '/public')));

    //mongoStore Sessions
    app.use(express.session({
      secret: 'secret',
      store: new mongoStore({
        url: config.mongo.uri,
        collection: 'sessions'
      }, function() {
        console.log("db connection open");
      })
    }));


    app.use(app.router);
  })
};
