angular.module('userApp')
    .component('users', {
        templateUrl: 'users/users.template.html',
        controller: function DevoteesController($scope, $http, store) {
            $scope.users = {};
            $scope.getUsers = function(){
                $http.get('http://138.68.83.101:8000/api/user')
                    .then(function (response) {
                            console.log(response);
                            $scope.users = response.data;
                        },
                        function (error) {
                            console.log(error);
                        });
            }

        }
    })
    .component('user', {
        templateUrl: 'users/user.template.html',
        controller: function DevoteeController($scope, $routeParams) {
            console.log($routeParams.id);
            var self = this;
            $http.get("http://localhost:8080/devotee/$routeParams.id")
                .then(
                    function (success) {
                        self.devotees = success.data;
                    }
                );
        }
    });