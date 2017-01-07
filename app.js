var lunchCheckerModule = angular.module('LunchChecker',[]);
var lunchCheckerControllerFunc = function($scope){
    this.checkLunch = function(){
      if($scope.lunchItems=="" || $scope.lunchItems==null){
        $scope.noItems = 0;
      } else {
        $scope.noItems = $scope.lunchItems.split(',').length;
      }
    }
  };


lunchCheckerControllerFunc.$inject = ['$scope'];

lunchCheckerModule.controller('LunchCheckerController',lunchCheckerControllerFunc);
