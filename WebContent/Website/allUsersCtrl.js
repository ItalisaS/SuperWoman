var app = angular.module("allUsersApp", []);

app.controller("allUsersController", function($scope){
	
	$scope.allUsers = [
		{name: "test", email: "gtest"}
	];
		
	$scope.addUser = function() {
		$scope.allUsers.push( {name: $scope.newName, email: $scope.newEmail});
	};
	
});