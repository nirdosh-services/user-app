angular.module('userApp')
    .component(
        'login',
        {
            templateUrl: 'login/login.html',
            controller: function LoginController(authFactory,
                                                 $rootScope,
                                                 $location,
                                                 $http,
                                                 $scope,
                                                 store) {
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
    .factory('authFactory',['$http', function($http){
        var urlBase = 'http://138.68.83.101:8000/login';
        var autFactory = {};

        autFactory.login = function (name, password) {
            return $http.post(urlBase,{name:name, password:password}, {skipAuthorization: true})
        }

        return autFactory;

    }]);