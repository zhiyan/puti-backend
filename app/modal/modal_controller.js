(function(){
  'use strict';


  angular.module('modal',[])
    .controller("ModalController", function($scope){

		$scope.title="";
		$scope.body="";

		$scope.$on("modal",function(evt,title,body){
			$scope.title = title;
			$scope.body = body;
		});

		$scope.close = function(){
			$scope.title="";
			$scope.body="";
		}

	});

})();