(function() {
    'use strict';


    angular.module('view-room', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/room', {
                    templateUrl: 'room/room.html',
                    controller: 'RoomCtrl'
                })
                .when('/room/add', {
                    templateUrl: 'room/roomAdd.html',
                    controller: 'RoomAddCtrl'
                })
                .when('/room/edit/:id', {
                    templateUrl: 'room/roomAdd.html',
                    controller: 'RoomAddCtrl'
                });
        })
        .controller('RoomCtrl', function($scope, $rootScope, $http, $vars) {

            var URL_LIST = "/data/room.json";

            $rootScope.nav = "room";

            $scope.building = $vars.building;

            $scope.currentBuilding = "1";

            $scope.changeBuilding = function(){
              getList()
            }

            $scope.del = function(id){
              $http.post("/data/room.json",{id:id})
              .success(function(res){
                if(res.status){
                  $scope.alert("删除成功");
                  getList();
                }else{
                  $scope.alert(res.msg);
                }
              })
            }

            function getList(){
                $http.get(URL_LIST,{params:{id:$scope.currentBuilding}})
                .success(function(res) {
                    if (res.status) {
                        $scope.list = res.data.list || [];
                    }
                })
            }

            getList();


        })
        .controller('RoomAddCtrl', function($scope, $rootScope, $http,$routeParams,$location,$vars) {

            $scope.param = {
                "id" : $routeParams.id || "",
                "bid" : "1",
                "name" : "",
                "img" : [""]
            }

            $scope.building = $vars.building;

            $scope.types = $vars.types;

            if( $scope.param.id ){
                $http.get("/data/roomdetail.json",{params:{id:$scope.param.id}})
                    .success(function(res){
                        if(res.status){
                            $scope.param.name = res.data.name;
                            $scope.param.bid = res.data.bid+"";
                            $scope.param.img = res.data.img && res.data.img.length ? res.data.img : [""];
                        }
                    })
            }

            $rootScope.nav = "roomAdd";

            $scope.addPic = function(){
              $scope.param.img.push("");
            }

            $scope.submit = function() {
                if ($scope.form.$valid) {
                    $http.post("/data/room.json",$scope.param)
                    .success(function(res){
                        if( res.status ){
                            $scope.alert("提交成功");
                            $location.path("/room")
                        }else{  
                            $scope.alert(res.msg);
                        }
                    })
                }
            }
        });

})();
