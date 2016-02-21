var myApp = angular.module('myApp', []);

myApp.controller('diceRollerCtrl', ['$scope', function($scope) {
    
//    Data for 'Number of Dice' Dropdown.
    $scope.diceNumber = [{
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
    $scope.selectedNumber = $scope.diceNumber[0];
    
//    Data for 'Type of Dice' Dropdown.    
    $scope.diceType = [{
      id: 'D3',
      value: 3
    }, {
      id: 'D4',
      value: 4
    }, {
      id: 'D6',
      value: 6
    }, {
      id: 'D8',
      value: 8
    }, {
      id: 'D10',
      value: 10
    }, {
      id: 'D12',
      value: 12
    }, {
      id: 'D14',
      value: 14
    }, {
      id: 'D16',
      value: 16
    }, {
      id: 'D18',
      value: 18
    }, {
      id: 'D20y',
      value: 20
    }];
    $scope.selectedType = $scope.diceType[0];
    
    
//    A function that generates a numberic value based on the type of dice selected.
    $scope.rollDice = function(number, type) {
//        Declare variables for the number of dice and the type of dice.
        $scope.rolledDiceNumber = number;
        $scope.rolledDiceType = type;
//        Generate a random number based off whatever dice type is selected.
        $scope.die = Math.floor((Math.random() * $scope.rolledDiceType) + 1);
//        Store values into results varuable. This will be the varuable that gets displayed in the view...
        $scope.results = $scope.die;
    }
    
    console.log($scope.rolledDiceNumber);
    
}]);