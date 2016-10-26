angular.module('userApp')
    .component('users', {
        templateUrl: 'users/users.template.html',
        controller: function DevoteesController($scope, $http, apiConfig, $location) {
            $scope.users = {};
            var userEndpoint = apiConfig.domain + apiConfig.userEndpoint;
            $scope.getUsers = function(){
                $http.get(userEndpoint)
                    .then(function (response) {
                            console.log(response);
                            $scope.users = response.data;
                        },
                        function (error) {
                            console.log(error);
                        });
            };

            $scope.editUser = function (id) {
                $location.path('/editUser/'+id)
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
    })
    .component('edituser', {
        templateUrl: 'users/user.edit.template.html',
        controller: function EditUserController($scope){
            $scope.tab = 1;

            $scope.setTab = function (tabNo) {
                $scope.tab = tabNo;

            }
            $scope.isSet = function(tabNum){
                return $scope.tab === tabNum;
            }
        }
    });