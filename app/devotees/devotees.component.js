angular.module('devotees', ['ngRoute', 'ngResource'])
    .component('devotees', {
        templateUrl: 'devotees/devotees.template.html',
        controller: function DevoteesController($scope, $http) {
            var self = this;
            $http.get("http://devotee-service:8080/devotee")
                .then(
                    function (success) {
                        self.devotees = success.data;
                    },
                    function (error) {
                        console.log(error);
                    });
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