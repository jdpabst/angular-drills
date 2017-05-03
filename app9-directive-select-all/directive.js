angular.module('app').directive('highlightDir', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attribute){
            element.on('click', function(){
                $(this).select();
            })
        }
        
    }
})