var myApp = angular.module('myApp', []);

myApp.controller('MainController', ['$scope', function($scope) {
	$scope.value = "This is a test";
	$scope.values = [];

	$scope.addValue = function() {
		$scope.values.push($scope.newValue);
		$scope.newValue = "";
	};
	
}]);
