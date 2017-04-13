angular.module('userApp')
    .component('users', {
        templateUrl: 'users/users.template.html',
        controller: function DevoteesController($scope, $http, apiConfig, $location, userService) {
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
                $location.path('/editUser/' + id)
            }

        }
    })
    .component('user', {
        templateUrl: 'users/user.template.html',
        controller: function DevoteeController($scope, $routeParams, devoteeService) {
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
        controller: function EditUserController($scope, $routeParams, userService) {
            $scope.tab = 1;
            $scope.user = {};

            $scope.setTab = function (tabNo) {
                $scope.tab = tabNo;
                console.log("tab"+ $scope.user);

            };
            $scope.isSet = function (tabNum) {
                return $scope.tab === tabNum;
            };

            userService.getUser($routeParams.id).then(
                function (response) {
                    console.log(response.data);
                    $scope.user = response.data;
                    userService.setCurrentUser($scope.user);
                },
                function (error) {
                    console.log("error while getting user");
                }
            );
        }
    })
    .component('telInfo', {
        templateUrl: 'users/tel-info.html',
        controller: function telInfoCtrl($scope) {

        }
    })
    .component('addrInfo', {
        templateUrl: 'users/addr-info.html',
        controller: function adrInfoCtrl($scope) {

        }
    })
    .component('flightInfo', {
        templateUrl: 'users/flight-info.html',
        controller: function flightInfoCtrl($scope) {

        }
    })
    .component('addInfo', {
        templateUrl: 'users/add-info.html',
        controller: function addInfoCtrl($scope) {

        }
    })
    .component('paymentInfo', {
        templateUrl: 'users/payment-info.html',
        controller: function paymentInfoCtrl($scope) {

        }
    })
    .component('outboundFlight', {
        templateUrl: 'users/outbound-flight.html',
        controller: function outboundFlightCtrl($scope) {

        }
    })
    .component('returnFlight', {
        templateUrl: 'users/return-flight.html',
        controller: function returnFlightCtrl($scope) {
        }
    })
    .component('ftpInfo', {
        templateUrl: 'users/ftp-info.html',
        controller: function ftpInfoCtrl($scope) {

        }
    }).component('contactInfo', {
        templateUrl: 'users/contact-info.html',
        controller: function contactInfoCtrl($scope) {

        }
    }).component('basicInfo', {
        templateUrl: 'users/basic-info.html',
        controller: function basicInfoCtrl($scope, userService) {
            console.log("test");
            console.log("user" + userService.getCurrentUser());
        }});