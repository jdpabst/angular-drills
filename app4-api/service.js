angular.module('apiApp').service('mainService', function($http){

this.getData = function(){

    // add a return because it is a promise. You need to return a promise.
   return $http({

       method: 'GET',
       url: 'http://smurfs.devmounta.in/smurfs/'

    });

};


});