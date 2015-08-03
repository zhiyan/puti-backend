(function(){
  'use strict';


  angular.module('view-account',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/account', {
          templateUrl: 'account/account.html',
          controller: 'AccountCtrl'
        });
    })
    .controller('AccountCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "account";
    });

})();