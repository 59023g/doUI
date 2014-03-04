'use strict';

angular.module('doUI', [
  'timer',
  'ngResource',
  'ngroute',
  'doController'
  //'doServices'
])
  .config(function($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './partials/doUI',
        controller: 'doController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

$locationProvider.html5Mode(true);
