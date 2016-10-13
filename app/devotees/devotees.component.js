angular.module('devotees')
	.component('devotees',{
		templateUrl: 'devotees/devotees.template.html',
        controller: function PhoneListController($scope, $http){
			var self = this;
			$http.get("http://localhost:8080/devotee")
				.then(
					function (success) {
						self.devotees = success.data;
					},
					function (error) {
						console.log(error);
					});
		}
	});