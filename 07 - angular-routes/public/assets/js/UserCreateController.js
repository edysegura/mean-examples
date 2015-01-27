
myApp.controller('UserCreateController', ['$scope', '$location', 'Restangular', function($scope, $location, Restangular) {
	$scope.user = {};
	
	$scope.saveUser = function() {
		Restangular.all('api/users')
			.post($scope.user)
			.then(function(user) {
				$location.path('/users');
			});
	};

}]);
