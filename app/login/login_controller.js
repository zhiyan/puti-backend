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
    .controller('LoginCtrl', function ($scope,$rootScope,$location,$http) {

      $rootScope.logined = false;

      if(document.cookie.indexOf("user_info=") > -1){
        $rootScope.logined = true;
      }

      $scope.param = {
        "username" : "admin",
        "password" : ""
      }

      if( $rootScope.logined ){
        $location.path("/home")
      }

      $scope.login = function(){
        this["login-form"].$setDirty();
        if( this["login-form"].$valid ){
          $http.post("/api/bodhi/manage/mCheckIn.htm",$scope.param).success(function(res){
            // $http.get("/api/bodhi/manage/mCheckIn.htm").success(function(res){
            if(res.ret){
              window.location.reload()
            }else{
              $scope.alert(res.errmsg);
            }
          });
        }
        return false;
      };
    });

})();