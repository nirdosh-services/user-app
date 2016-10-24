angular
    .module('userApp')
    .component(
        'manager',
        {
            templateUrl: 'manager/manager.template.html',
            controller: function ManagerController($scope){
                $scope.tab = 1;

                $scope.setTab = function (tabNo) {
                    $scope.tab = tabNo;

                }
                $scope.isSet = function(tabNum){
                    return $scope.tab === tabNum;
                }
            }
        }
    );