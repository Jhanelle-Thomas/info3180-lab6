app.controller("myCtrl", function($scope) {
	$scope.products = ["Milk", "Bread", "Cheese"];
	
	$scope.addItem = function() {
	    $scope.products.push($scope.addMe);   
	}
	
	$scope.removeItem = function(index) {
	    $scope.products.splice(x,1);
	}
});
