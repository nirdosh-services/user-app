angular.
module('devoteeApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {

        $routeProvider
            .when('/devotees', {
            template: '<devotees></devotees>'
        })
            .when('/devotee/:id', {
            template: '<devotee></devotee>'
        })
            .when('/manager',{
                template: '<manager></manager>'
            })
            .otherwise('/manager');
    }
]);