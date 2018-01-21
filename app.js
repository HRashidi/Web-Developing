(function () {
'use strict';
angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope){
  $scope.name = "Hossein";
  $scope.stateOfBeing = "hungry";
  $scope.sayMassage = function (){
    return $scope.name + " like to eat healthy Pizza!"
  };

  $scope.feedXlord = function () {
    $scope.stateOfBeing = "fed";
  }

}

})();
