angular.module('app').directive('loginDir', function(){

    return {
        restrict: 'EA',
        templateUrl: './loginTmpl.html',
        controller: function($scope){
            $scope.alertInfo = function(loginInfo){
                alert(loginInfo);
                console.log(loginInfo);
            }


        }
    }

})