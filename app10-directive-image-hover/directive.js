angular.module('app').directive('imgDir', function(){
    return {
        restrict: 'E',
        template: "<img ng-src='{{imgUrl}}'/>",
        scope: {
            imgUrl: '@',
        }
    }

})