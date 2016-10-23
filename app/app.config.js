angular.module('userApp')
    .config([
        '$locationProvider',
        '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $routeProvider
                .when('/devotees', {
                    template: '<devotees></devotees>'
                })
                .when('/devotee/:id', {
                    template: '<devotee></devotee>'
                })
                .when('/manager', {
                    template: '<manager></manager>'
                })
                .when('/login',{
                    template:'<login></login>'
                })
                .when('/flightInfo',{
                    template: '<flightInfo></flightInfo>'
                })
                .when('/trainInfo',{
                    template: '<trainInfo></trainInfo>'
                })
                .when('/ftpInfo',{
                    template:'<ftpInfo></ftpInfo>'
                })
                .otherwise('/login');
        }
    ]);