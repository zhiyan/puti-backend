(function(){
  'use strict';


  angular.module('view-accommodation',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/accommodation', {
          templateUrl: 'accommodation/accommodation.html',
          controller: 'AccommodationCtrl'
        });
    })
    .controller('AccommodationCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "accommodation";
    });

})();