angular.module('apiApp').controller('mainCtrl', function($scope, mainService){


$scope.getSmurfs = function(){
  
   mainService.getData().then(function(response){

       $scope.smurfs = response.data;

   });
};
$scope.getSmurfs();
})