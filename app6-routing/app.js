angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/',
            template: "<h1>Home</h1>",

        })
        .state('sign up', {
            url: '/signup',
            template: "<h1>Sign Up</h1>"
        })
        .state('details', {
            url: '/details',
            templateUrl: './detailsTmpl.html',
            controller: 'detailsCtrl',
            // get data before page loads - doesn't change state until data loads... this is where you'd add a loading symbol.
            resolve: {
                planets: function(mainService){
                    return mainService.getPlanets();
                }
            }
        })



// sends you to home by default if invalid
$urlRouterProvider.otherwise('/')
})