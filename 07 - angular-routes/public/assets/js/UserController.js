
myApp.controller('UserController', ['$scope', 'Restangular', function($scope, Restangular) {
	$scope.users = [];
	
	var setUsers = function(users) {
		$scope.users = users;	
	};

	Restangular.all('api/users').getList().then(setUsers);

}]);
