(function(){
  'use strict';


  angular.module('view-login',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
        });
    })
    .controller('LoginCtrl', function ($scope,$rootScope,$location) {

      $rootScope.logined = true;

      $scope.param = {
        "username" : "admin",
        "password" : ""
      }

      if( $rootScope.logined ){
        $location.path("/news/add")
      }

      $scope.login = function(){
        this["login-form"].$setDirty();
        if( this["login-form"].$valid ){
          console.log($scope.param)
        }
        return false;
      };
    });

})();