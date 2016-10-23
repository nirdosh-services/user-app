angular.module('userApp')
    .component('devotees', {
        templateUrl: 'devotees/devotees.template.html',
        controller: function DevoteesController($scope, $http) {
            $scope.users = {};
            $scope.getUsers = function(){
                $http.get('http://localhost:8000/api/user')
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
    .component('devotee', {
        templateUrl: 'devotees/devotee.template.html',
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