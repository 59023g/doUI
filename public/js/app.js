'use strict';

angular.module('doUI', [
  //'ngCookies',
  'timer',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/doUI',
        controller: 'doController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


