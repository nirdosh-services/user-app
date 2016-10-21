angular
    .module('manager', [])
    .component(
        'manager',
        {
            templateUrl: 'manager/manager.template.html',
            controller: function ManagerController($rootScope, $scope, $location){
                $scope.loggedIn = function () {
                    if($rootScope.token !== null);
                }
            }
        }
    )