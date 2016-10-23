angular
    .module('userApp', ['ngRoute', 'angular-storage'])
    .factory('authProvider', function (store) {
        return {
            isLoggedIn : function () {
                return store.get('token');
            }
        }
    })
    .run(['$rootScope','$location','authProvider',
        function ($rootScope, $location, authProvider) {
            $rootScope.$on('$routeChangeStart', function (event) {
                if(!authProvider.isLoggedIn()){
                    console.log('DENY: Redirecting to Login');
                    $location.path('/login');
                }else{
                    console.log('ALLOW');
                }
            })
        }
    ]);
