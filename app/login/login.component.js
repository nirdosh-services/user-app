angular.module('login', ['ngRoute'])
    .component(
        'login',
        {
            templateUrl: 'login/login.html',
            controller: function LoginController(authFactory, $rootScope, $location, $http, $scope) {
                $scope.token = {};
                $scope.error = {};
                $scope.login = function () {
                    authFactory.login($scope.name, $scope.password)
                        .then(
                            function (response) {
                                $scope.token = response.data.token;
                                $location.path("/manager");
                            },
                            function (error) {
                                $scope.error = error;
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