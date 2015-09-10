(function(){

angular.module("backend")

.controller("MainController",function($scope,$http){

	$scope.alert = function(title,body){
		if( !body ){
			body = title || "未知错误";
			title = "提示";
		}
		$scope.$broadcast("modal",title,body);
	}

	$scope.confirm = function(title,cb){
		$scope.$broadcast("modal","操作确认",title || "是否确认该操作",cb);
	}

	$scope.logout = function(){
		$http.post("/api/bodhi/manage/mCheckOut.htm").success(function(res){
	        if(res.ret){
	        	document.cookie="user_info=;domain=.admin.boutiquehouse.cn;expires=Thu, 01-Jan-1970 00:00:01 GMT"
	          	window.location.href="#/login"
	        }else{
	          $scope.alert(res.errmsg);
	        }
	      });
	}
});



})();