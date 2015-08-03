(function(){
  'use strict';


  angular.module('view-login',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
        });
    })
    .controller('LoginCtrl', function ($scope,$rootScope) {

      $rootScope.nav = true;

      $scope.login = function(){
        // TOTO: LOGIN
      };
    });

})();