angular
    .module('navBar', [])
    .component('navBar', {
        templateUrl: 'nav-bar/nav-bar.template.html',
        controller: function NavBarController($rootScope,$scope, $location){
            $scope.logout = function(){
                $rootScope.token = null;
                $location.path("/login");
            }
        }
    });