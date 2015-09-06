(function(){
  'use strict';


  angular.module('modal',[])
    .controller("ModalController", function($scope){

		$scope.title="";
		$scope.body="";

		$scope.$on("modal",function(evt,title,body,cb){
			$scope.title = title;
			$scope.body = body;
			if( typeof cb === "function" ){
				$scope.cb = function(){
					cb();
					$scope.close();
				};
			}else{
				$scope.cb = null;
			}
		});

		$scope.close = function(){
			$scope.title="";
			$scope.body="";
		}

	});

})();