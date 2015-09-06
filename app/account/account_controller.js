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
    .controller('AccountCtrl', function ($scope,$rootScope,$http) {
      $rootScope.nav = "account";

      $scope.notConfirm = false;

      $scope.reset = function(){
         $scope.param = {
          "oldPasswd" : "",
          "newPasswd" : "",
          "confirmPasswd" : ""
        }
      }

      $scope.submit = function(){

        if($scope.newPasswd !== $scope.confirmPasswd ){
          $scope.notConfirm = true;
          return false;
        }else{
          $scope.notConfirm = false;
        }
        
        if($scope.form.$valid){
          $scope.alert();
          $http.post("/admin/login",$scope.param).success(function(res){
            if(res.ret){
              alert("修改密码成功");
            }else{
              $scope.alert(res.errmsg);
            }
          });
        }
        return false;
      }

      $scope.reset();
    });

})();