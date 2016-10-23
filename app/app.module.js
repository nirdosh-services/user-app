angular
    .module('userApp', ['ngRoute', 'angular-storage','angular-jwt'])
    .factory('authProvider', function (store) {
        var authProvider = {};
        authProvider.isLoggedIn = function () {
                return store.get('token');
            };
        return authProvider;
    })
    .factory('oauthHttpInterceptor', function (store) {
        return {
            request: function (config) {
                // This is just example logic, you could check the URL (for example)
                if (config.headers.Authorization === 'Bearer') {
                    config.headers.Authorization = 'Bearer ' + store.get('token');
                }
                return config;
            }
        };
    })
    .run(
        function ($http, $rootScope, $location,store, authProvider) {
            $rootScope.$on('$routeChangeStart', function (event) {
                if(!authProvider.isLoggedIn()){
                    console.log('DENY: Redirecting to Login');
                    $location.path('/login');
                }else{
                    console.log('ALLOW');
                }
            });
        }
    )
    .config(function ($httpProvider,jwtOptionsProvider) {
        jwtOptionsProvider.config({
            tokenGetter: ['store', function(store) {
                return store.get('token');
            }]
        });

        $httpProvider.interceptors.push('jwtInterceptor');
});
