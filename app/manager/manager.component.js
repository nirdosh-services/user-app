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
    )
    .component('basicInfo',{
        templateUrl: 'manager/basic-info.html',
        controller: function basicInfoCtrl($scope) {

        }
    })
    .component('transportInfo',{
        templateUrl: 'manager/transport-info.html',
        controller: function basicInfoCtrl($scope) {

        }
    })
    .component('additionalInfo',{
        templateUrl: 'manager/additional-info.html',
        controller: function basicInfoCtrl($scope) {

        }
    })
;