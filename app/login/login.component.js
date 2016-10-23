angular.module('userApp')
    .component(
        'login',
        {
            templateUrl: 'login/login.html',
            controller: function LoginController(authFactory, $rootScope, $location, $http, $scope, store) {
                $scope.token = {};
                $scope.error = {};
                $scope.login = function () {
                    authFactory.login($scope.name, $scope.password)
                        .then(
                            function (response) {
                                store.set('token', response.data.token)
                                $location.path("/manager");
                            },
                            function (error) {
                                console.log(error);
                                $location.path("/login");
                            }
                        )

                }
            }
        })
    .service('loginService', function ($http) {
        return {
            login: function (name, password) {
                return $http.post(
                    'http://localhost:8000/login',
                    {name: name, password: password})
            }
        };
    })
    .factory('authFactory',['$http', function($http){
        var urlBase = 'http://localhost:8000/login';
        var autFactory = {};

        autFactory.login = function (name, password) {
            return $http.post(urlBase,{name:name, password:password})
        }

        return autFactory;

    }]);