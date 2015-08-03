(function(){
	'use strict';

	angular.module('backend', [ 'ngRoute','backend-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();