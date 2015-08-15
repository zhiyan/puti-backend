(function(){

angular.module("backend")

.controller("MainController",function($scope){

	$scope.alert = function(title,body){
		if( !body ){
			body = title || "未知错误";
			title = "提示";
		}
		$scope.$broadcast("modal",title,body);
	}
});



})();