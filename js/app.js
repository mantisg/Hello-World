var myApp = angular.module('myApp', []);

myApp.controller('diceRollerCtrl', ['$scope', function($scope) {
    
//    Data for 'Number of Dice' Dropdown.
    $scope.items = [{
      id: 1
    }, {
      id: 2
    }, {
      id: 3
    }, {
      id: 4
    }, {
      id: 5
    }, {
      id: 6
    }, {
      id: 7
    }, {
      id: 8
    }, {
      id: 9
    }, {
      id: 10
    }];
    $scope.selected = $scope.items[0];
    
    
}]);