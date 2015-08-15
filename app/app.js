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
	  })
	  .service("$vars",function(){
	  	this.types = [
	  		{"id" : 1, "name" : "食"},
	  		{"id" : 2, "name" : "游"},
	  		{"id" : 3, "name" : "物"}
	  	]
	  });
	  
})();