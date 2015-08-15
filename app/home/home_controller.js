(function(){
  'use strict';


  angular.module('view-home',['ngRoute','ngFileUpload'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'home/home.html',
          controller: 'HomeCtrl'
        });
    })
    .controller('HomeCtrl', function ($scope,$rootScope,Upload,$http) {

      var URL_PRIORITY = "/data/priority",
          URL_DEL = "/data/home.json",
          URL_UPLOAD = "/data/home.json"

      $rootScope.nav = "home";

      $scope.getList = function(){
        $http.get("/data/home.json")
          .success(function(res){
            if(res.status){
              console.log(res.data)
              $scope.list = res.data || [];
            }
          })
      }

      $scope.$watch('file', function (file) {
        if( !!file ){
          $scope.upload($scope.file);
        }
      });

      Upload.setDefaults({"ngf-keep":false,"ngf-accept":'image/*'});

      $scope.upload = function (file) {
          Upload.upload({
              url: URL_UPLOAD,
              fields: {'id': $scope.id},
              file: file
          }).success(function (data, status, headers, config) {
              console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
          }).error(function (data, status, headers, config) {
              $scope.alert("上传失败，请重新再试")
          })
      };

      $scope.setPriority = function( id,priority ){
        $http.post(URL_PRIORITY,{id:id,priority:priority})
      }

      $scope.del = function(one){
        $http.post(URL_DEL,{id:one.id})
        // $http.get(URL_DEL,{params:{id:one.id}})
            .success(function(res){
              if( res.status ){
                one.markDel = true;
                $scope.alert("删除成功");
              }else{
                $scope.alert(res.msg);
              }
            })
      }


      $scope.getList();
    });

})();