(function(){
	'use strict';

	angular.module('backend', [ 
		'ngRoute',
		'modal',
		'ngFileUpload',
		'view-nav',
		'view-login',
		'view-activity',
		'view-location',
		'view-pics',
		'view-news',
		'view-room',
		'view-home',
		'view-product',
		'view-account',
		'templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/login'
	      });
	  })
	  .service("$vars",function(){
	  	this.types = [
	  		{"id" : 1, "name" : "食"},
	  		// {"id" : 2, "name" : "游"},
	  		{"id" : 3, "name" : "讯"}
	  	]

	  	this.building = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	  });
	  
})();