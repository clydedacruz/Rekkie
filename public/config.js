var rekkie = angular.module('rekkie', ['ngRoute','angular-skycons','gaugejs','ui.bootstrap','ngStorage']);


rekkie.config(['$routeProvider', '$httpProvider', function($routeprovider, $httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;

    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $routeprovider.when('/main', {
            templateUrl: 'partials/main.html',
            controller: 'mainController'
        }).when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        .otherwise({
            redirectTo: '/home'
        })

}]);



