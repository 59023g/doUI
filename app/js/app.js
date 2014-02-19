 var doUI = angular.module('doUI', [
 	//modules doUI depends on
 	'timer', 
 	'ngRoute',
 	'doControllers'
 	]);


/* Route Template */
doUI.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/index.html',
        controller: 'doController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);


