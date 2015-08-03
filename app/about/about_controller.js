(function(){
  'use strict';


  angular.module('view-about',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/about', {
          templateUrl: 'about/about.html',
          controller: 'AboutCtrl'
        });
    })
    .controller('AboutCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "about";
    });

})();