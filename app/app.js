(function(){
	'use strict';

	angular.module('backend', [ 
		'ngRoute',
		'view-nav',
		'view-login',
		'view-activity',
		'view-location',
		'view-kitchen',
		'view-news',
		'view-accommodation',
		'view-home',
		'view-product',
		'view-account',
		'templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/login'
	      });
	  });
	  
})();