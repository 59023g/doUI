'use strict';

var _ = require('lodash');
	//path = require('path');

/**
 * Load environment configuration
*/

//var rootPath = path.normalize(__dirname + '/../../..');

module.exports = {
  //root: rootPath,
  port: process.env.PORT || 3000,
  mongo: {
  	uri: 'mongodb://localhost/games',
    options: {
      db: {
        safe: true
      }
    }
  }
};