angular.module('userApp')
    .config([
        '$locationProvider',
        '$routeProvider',
        'jwtOptionsProvider',
        '$httpProvider',
        function config($locationProvider, $routeProvider,jwtOptionsProvider, $httpProvider) {
            $routeProvider
                .when('/users', {
                    template: '<users></users>'
                })
                .when('/user/:id', {
                    template: '<user></user>'
                })
                .when('/editUser/:id',{
                    template: '<edituser></edituser>'
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
                .when('/admin', {
                    template: '<admin></admin>'
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