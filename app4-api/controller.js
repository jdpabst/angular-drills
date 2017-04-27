angular.module('apiApp').controller('mainCtrl', function($scope, mainService){
    
    $scope.getSmurf = function(){

        mainService.getData().then(function(response){
            $scope.smurfs = response.data;
        })
    }
$scope.getSmurf();
})