angular.module('devotees', ['ngRoute', 'ngResource'])
    .component('devotees', {
        templateUrl: 'devotees/devotees.template.html',
        controller: function DevoteesController($scope, $http) {
            $scope.users = [
                {name:"nirdosh", lastName:"parmar", gender: "Male",birthDate:"25-12-2016"},
                {name:"paresh", lastName:"parmar", gender: "Male",birthDate:"25-12-2016"},
                {name:"test", lastName:"parmar", gender: "Male",birthDate:"25-12-2016"}
            ]
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