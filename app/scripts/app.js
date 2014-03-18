'use strict';

angular.module('doUiApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise('/');
    //
    // Now set up the states
    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'partials/main',
        controller: 'doController'
      })
      .state('state1.teams', {
        url: '/teams',
        template: '<h1>Teams</h1>',
        controller: function($scope) {
          $scope=$scope;
        }
      });

    $locationProvider.html5Mode(true);
  });
