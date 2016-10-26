angular
    .module('userApp', ['ngRoute', 'angular-storage','angular-jwt'])
    .factory('authProvider', function (store) {
        var authProvider = {};
        authProvider.isLoggedIn = function () {
                return store.get('token');
            };
        return authProvider;
    })
    .constant('apiConfig',{
        domain:'http://localhost:8000',
        userEndpoint:'/api/user',
        loginEndpoint:'/login'
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
    );
