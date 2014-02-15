 var doUI = angular.module('doUI', ['timer']);

 doUI.controller('doController', function($scope, $http) {
     $http.get('data/games.json').success(function(data) {
         $scope.teams = data;
     });


     $scope.timerRunning = true;
     var timeStarted = false;
     $scope.countdownVal = 900;


     $scope.startClock = function() {
         if (!timeStarted) {
             $scope.$broadcast('timer-start');
             $scope.timerRunning = true;
             timeStarted = true
         } else if ((timeStarted) && (!$scope.timerRunning)) {
             $scope.$broadcast('timer-resume');
             $scope.timerRunning = true;
         }

     };

     $scope.stopClock = function() {
         if ((timeStarted) && ($scope.timerRunning)) {
             $scope.$broadcast('timer-stop');
             $scope.timerRunning = false;
         }

     };

     $scope.resetClock = function() {
         if ((!$scope.timerRunning))
             $scope.$broadcast('timer-reset');

     }

     $scope.addPoint = function() {


     }
 });
