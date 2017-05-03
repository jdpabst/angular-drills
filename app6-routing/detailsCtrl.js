angular.module('app').controller('detailsCtrl', function($scope, mainService, planets){
// $scope.test = 'hello'


$scope.planets = planets.data.results;

// $scope.getPlanets = function(){
//     mainService.getPlanets().then(function(response){
//         $scope.planets = response.data.results;
//         console.log($scope.planets)
//     })
// }

// $scope.getPlanets()

})