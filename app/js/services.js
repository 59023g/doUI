'use strict';

/* Services */

var doServices = angular.module('doServices', ['ngResource']);

doServices.factory('game', ['$resource',
  function($resource){
    return $resource('data/games.json', {}, {
      query: {method:'GET', isArray:true},
      put: {method: 'PUT'}
    });
  }]);