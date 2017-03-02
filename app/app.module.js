angular
    .module('userApp', ['ngRoute', 'angular-storage','angular-jwt'])
    .factory('authProvider', function (store, jwtHelper) {
        var authProvider = {};
        authProvider.isLoggedIn = function () {
                return store.get('token');
            };
        authProvider.isUserAdmin = function(){
            var token = jwtHelper.decodeToken(store.get('token'));
            return token.roles.indexOf('ROLE_READER') !== -1 ;
        };
        authProvider.hasUserEditRights = function(){
            var token = jwtHelper.decodeToken(store.get('token'));
            return token.roles.indexOf('ROLE_EDIT') != -1;
        };

        return authProvider;
    })
    .constant('apiConfig',{
        domain:'http://localhost:8000',
        userEndpoint:'/api/user',
        loginEndpoint:'/login'
    })
    .factory('userService', function ($http, apiConfig) {
        var userService = {};
        var userEndpoint = apiConfig.domain + apiConfig.userEndpoint;
        userService.getUsers = function(){
                return $http.get(userEndpoint);
        };

        userService.getUser = function(id) {
            return $http.get(userEndpoint+"/"+id);
        }

        return userService;
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
