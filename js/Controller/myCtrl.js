app.controller("myCtrl", function($scope) {
	$scope.products = ["Milk", "Bread", "Cheese"];
	
	$scope.addItem = function() {
	    $scope.errortext = "";
	    if(!$scope.addMe) { return; }
	    if($scope.products.indexOf($scope.addMe) == -1) {
	        $scope.products.push($scope.addMe);
	    } else {
	        $scope.errortext = "The item is already in your shopping list.";
	    }   
	}
	
	$scope.removeItem = function(index) {
	    $scope.errortext = "";
	    $scope.products.splice(index,1);
	}
});
