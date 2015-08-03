(function(){
  'use strict';


  angular.module('view-kitchen',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/kitchen', {
          templateUrl: 'kitchen/kitchen.html',
          controller: 'KitchenCtrl'
        });
    })
    .controller('KitchenCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "kitchen";
    });

})();