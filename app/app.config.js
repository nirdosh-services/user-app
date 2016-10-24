angular.module('userApp')
    .config([
        '$locationProvider',
        '$routeProvider',
        'jwtOptionsProvider',
        '$httpProvider',
        function config($locationProvider, $routeProvider,jwtOptionsProvider, $httpProvider) {
            $routeProvider
                .when('/devotees', {
                    template: '<users></users>'
                })
                .when('/devotee/:id', {
                    template: '<user></user>'
                })
                .when('/manager', {
                    template: '<manager></manager>'
                })
                .when('/login', {
                    template: '<login></login>'
                })
                .when('/flightInfo', {
                    template: '<flightInfo></flightInfo>'
                })
                .when('/trainInfo', {
                    template: '<trainInfo></trainInfo>'
                })
                .when('/ftpInfo', {
                    template: '<ftpInfo></ftpInfo>'
                })
                .otherwise('/login');

            jwtOptionsProvider.config({
                tokenGetter: ['store', function (store) {
                    return store.get('token');
                }],
                whiteListedDomains: ['localhost']
            });

            $httpProvider.interceptors.push('jwtInterceptor');
        }]);