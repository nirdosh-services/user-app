angular
    .module('userApp')
    .component(
        'manager',
        {
            templateUrl: 'manager/manager.template.html',
            controller: function managerController($scope){
                $scope.user = {};
                $scope.tab = 1;

                $scope.setTab = function (tabNo) {
                    $scope.tab = tabNo;

                }
                $scope.isSet = function(tabNum){
                    return $scope.tab === tabNum;
                }
                $scope.saveUser = function(){
                    console.log($scope.user);
                }
            }
        }
    )
    .component('basicInfoMgr',{
        templateUrl: 'manager/basic-info-mgr.html',
        controller: function basicInfoCtrl($scope) {
            $scope.user = $scope.$parent.user;
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