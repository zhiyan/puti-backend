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

      var URL_LIST = "/api/bodhi/query/home.htm",
          URL_ADD = "/api/bodhi/manager/homeImgAdd.htm",
          // URL_DEL = "/api/bodhi/manager/homeImgDel.htm",
          URL_UPDATE = "/api/bodhi/manager/homeImgUpdate.htm"

      $rootScope.nav = "home";

      $scope.getList = function(){
        $http.get(URL_LIST)
          .success(function(res){
            if(res.ret){
              $scope.list = res.data || [];
            }
          })
      }

      $scope.edit = function(obj){
        $http.post(URL_UPDATE,{id:obj.id,url:obj.url})
            .success(function(res){
              if( res.ret ){
                $scope.alert( !obj.url ? "删除成功" : "修改成功" );
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