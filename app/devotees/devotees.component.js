angular.module('devotees')
	.component('devotees',{
		templateUrl: 'devotees/devotees.template.html',
        controller: function PhoneListController($scope, $http){
			$http({
					  method:'JSONP',
					  url:"https://jsonplaceholder.typicode.com/posts"
				  }

			).then(
				function (success) {
					console.log(success);
					$scope.devotess = success;},
				function (error) {
				$scope.devotess = [
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