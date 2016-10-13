angular.module('devotees')
	.component('devotees',{
		templateUrl: 'devotees/devotees.template.html',
        controller: function PhoneListController($scope, $http){
			this.devotees = {};
			$http.get(
					  "http://localhost:8080/devotee"


			).then(
				function (success) {
					console.log(success);
					$scope.devotess = success.data;},
				function (error) {
				devotess = [
					{
						"name":"manibhai"
					},
					{
						"name":"nirdosh"
					},
					{
						"name":"parmarth"
					}
				];
			});
        }
	});