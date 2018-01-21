(function () {
'use strict';
angular.module('FoodListApp', [])
.controller('FooldListController', FooldListController);

FooldListController.$inject = ['$scope'];
function FooldListController($scope){
  $scope.foodList = "";
  $scope.message = "";
  $scope.messageStyle = "messageStle0";
  $scope.inputStyle = "inputStle0";

  $scope.calcList = function () {
    var listNum = 0;
    var message = "Nothing";
    var Mstyle = "messageStle0";
    var Istyle = "inputStle0";

    var arrayOfFood = splitString($scope.foodList, ',');
    arrayOfFood = arrayCheck(arrayOfFood);
    if (arrayOfFood.length == 0) {
      message = "Please enter data first";
      Mstyle = "messageStle0";
      Istyle = "inputStle0";
    }
    else if (arrayOfFood.length <= 3) {
      message = "Enjoy!";
      Mstyle = "messageStle1";
      Istyle = "inputStle1";
    }
    else {
      message = "Too much!";
      Mstyle = "messageStle2";
      Istyle = "inputStle2";
    }

    $scope.message = message;
    $scope.messageStyle = Mstyle;
    $scope.inputStyle = Istyle;



  }
}

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings;
}

function arrayCheck(inputArray) {
  var outputArray = new Array();
  for (var i = 0; i < inputArray.length; i++) {
    var str = inputArray[i];
    str = str.replace(/\s+/g, '');
    if (str != "") {
      outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
}

})();
