'use strict';

angular.module('doUiApp')
  .controller('doController', function($scope) {
    //$scope.games = game.query();

    $scope.timerRunning = true;
    var timeStarted = false;
    $scope.countdownVal = 900;


    $scope.startClock = function() {
      if (!timeStarted) {
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
        timeStarted = true;
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
      if ((!$scope.timerRunning)) {
        $scope.$broadcast('timer-reset');
      }
    };

    $scope.addPoint = function() {
      $scope.games.put();
    };
  });
