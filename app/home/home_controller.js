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
          // URL_ADD = "/api/bodhi/manage/homeImgAdd.htm",
          // URL_DEL = "/api/bodhi/manager/homeImgDel.htm",
          URL_UPDATE = "/api/bodhi/manage/homeImgUpdate.htm"

      $rootScope.nav = "home";

      $scope.getList = function(){
        $http.get(URL_LIST)
          .success(function(res){
            if(res.ret){
              res.data = res.data || []
              $.each(res.data,function(i,v){
                if( v.imgUrl === "#" ){
                  v.imgUrl = "";
                }
              })
              $scope.list = res.data;
            }
          })
      }

      $scope.edit = function(obj){
        $http.post(URL_UPDATE,{id:obj.id,imgUrl:obj.imgUrl || "#"})
            .success(function(res){
              if( res.ret ){
                $scope.alert( !obj.imgUrl ? "删除成功" : "修改成功" );
              }else{
                $scope.alert(res.errmsg);
              }
        })
      }

      $scope.del = function(obj){
        obj.imgUrl = "";
        $scope.edit(obj);
      }


      $scope.getList();
    });

})();