 /*var doUI = angular.module('doUI', ['timer']);*/


 var doController = angular.module('doController', []);



 doController.controller('doController', ['$scope', 'game',
     function($scope, game) {
         $scope.games = game.query();

         $scope.timerRunning = true;
         var timeStarted = false;
         $scope.countdownVal = 900;
         var count = 0;

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
            $scope.games.put();
         }
     }
 ]);
