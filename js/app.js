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
    
//    Data for 'Type of Dice' Dropdown.    
//    $scope.modifier = [{
//      id: 1
//    }, {
//      id: 2
//    }, {
//      id: 3
//    }, {
//      id: 4
//    }, {
//      id: 5
//    }, {
//      id: 6
//    }, {
//      id: 7
//    }, {
//      id: 8
//    }, {
//      id: 9
//    }, {
//      id: 10
//    }];
//    $scope.modifier = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.modifier = [5, 4, 3, 2, 1, 0, '-1', '-2', '-3', '-4', '-5'];
//    $scope.modifier = $scope.modifier[0];
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Declare the varable that will house the diceTotal array. This array is what will be used to display multiple dice per roll.
    $scope.results = [];
    $scope.total = [];
    $scope.totalDisplay = [];
    
    // A function that generates a numberic value based on the type of dice selected.
    $scope.rollDice = function (number, type) {
        // Whenever the roll button in clicked, empty the diceTotal array.
        $scope.results = [];
        
        // Declare variables for the number of dice and the type of dice. 
        $scope.rolledDiceNumber = number;
        $scope.rolledDiceType = type;
        
        // Function that generates the result based on whatever dice type is selected.
        $scope.generateDice = function () {
            // Generate a random number based off whatever dice type is selected.
            $scope.die = Math.floor((Math.random() * $scope.rolledDiceType) + 1);
            $scope.results.push($scope.die);
            
        };
        
//        $scope.totalDisplay.push($scope.die);
        $scope.total.push($scope.results);
        
        // Run the generateDice function based on the dice number value.
        for (i = 0; i < $scope.rolledDiceNumber; i++) {
            $scope.generateDice();
        }
        
        
        
    };
    
    // A function that clears the history array.
    $scope.clearHistory = function () {
        $scope.results = [];
        $scope.total = [];
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // Hide/show Future feature. History Section.
    // Josh... If you are able to find your way here and understand what is going on all by yourself. I will be very proud of you P.S. Love ya budy :)
    $scope.hideHistory = false;
    $scope.showHistory = true;

}]);