angular.module('devotees')
	.component('devotees',{
		templateUrl: 'devotees/devotees.template.html',
        controller: function PhoneListController($scope, $http){
        	this.devotees ={} ;

			$http.get("http://localhost:8080/devotee").then(function (success) {
				$scope.devotess = success;
			});
        }
	});