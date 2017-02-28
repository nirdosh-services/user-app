angular
    .module('userApp')
    .component('navBar', {
        templateUrl: 'nav-bar/nav-bar.template.html',
        controller: function NavBarController($rootScope, $scope, $location, store, authProvider) {
            $scope.logout = function () {
                store.remove('token');
                $location.path("/login");
            };
            $scope.isAuthenticated = function () {
                return store.get('token')!== null;
            };
            $scope.flightInfo = function(){
                $location.path('/flightInfo')
            }
            $scope.isUserAdmin = function(){
                return authProvider.isUserAdmin();
            }
            $scope.hasUserEditRights = function () {
                return store.get('token').roles.indexOf('ROLE_EDIT')!= -1;
            }
        }
    });