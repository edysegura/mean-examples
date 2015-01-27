var myApp = angular.module('myApp', ['ngRoute', 'restangular']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'partials/home.html'
		})
		.when('/users', {
			templateUrl: 'partials/user/index.html',
			controller: 'UserController'
		})
		.when('/users/create', {
			templateUrl: 'partials/user/form.html',
			controller: 'UserCreateController'
		})
		.otherwise({
			redirectTo: '/home'
		});
}]);

myApp.controller('EventsController', ['$scope', function($scope) {
	$scope.events = [];
	var socket = io();
	socket.on('myEventName', function(e) {
		$scope.$apply(function() {
			$scope.events.push(e);
		});
	});
}]);