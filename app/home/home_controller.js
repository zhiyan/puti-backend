(function(){
  'use strict';


  angular.module('view-home',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl'
        });
    })
    .controller('HomeCtrl', function ($scope,$rootScope,$http) {

      var URL = "/data/home.json"

      $rootScope.nav = "home";

      $scope.getList = function(){
        $http.get("/data/home.json")
          .success(function(res){
            if(res.status){
              $scope.list = res.data || [];
            }
          })
      }

      $scope.edit = function(obj){
        $http.post(URL,{id:obj.id,url:obj.url})
            .success(function(res){
              if( res.status ){
                $scope.alert("修改成功");
              }else{
                $scope.alert(res.msg);
              }
        })
      }

      $scope.del = function(obj){
        obj.url = "";
        $scope.edit(obj);
      }


      $scope.getList();
    });

})();