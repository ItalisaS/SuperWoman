var app = angular.module("userApp", []);

app.controller("userController", function($scope){
	$scope.username = "";
	$scope.welcomeUser = function() {
		$scope.greeting = "Welcome " + $scope.username + "!";
	};
});