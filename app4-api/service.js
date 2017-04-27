angular.module('apiApp').service('mainService', function($http){

    this.getData = function(){
        return $http({
           method: 'GET',
           url: 'http://smurfs.devmounta.in/smurfs/'

        })
    }


})