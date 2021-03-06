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
                })
                .when('/room/lou_desc', {
                    templateUrl: 'room/lou_desc.html',
                    controller: 'LouDescCtrl'
                });
        })
        
        .controller('LouDescCtrl', function($scope, $rootScope, $http,$location, $vars){
            var URL_LOU_DESC = "/api/bodhi/query/buildingDetail.htm";
            var URL_ADD_DESC = "/api/bodhi/manage/hotelBuildingAdd.htm";
            var URL_UPDATE_DESC = "/api/bodhi/manage/hotelBuildingUpdate.htm";
            
            var editor;
            
            $scope.building = $vars.building;
            $scope.currentBuilding = "1";
            $scope.needCreate = 1;
            $scope.param = {
                "id":$scope.currentBuilding,
                "title" : "",
                "content" : ""
            }
            $scope.changeBuilding = function(){
               getLouDesc()
            }

            editor = CKEDITOR.replace('editor',{language : 'zh-cn'}); 
            
            function getLouDesc(){
                $http.get(URL_LOU_DESC,{params:{id:$scope.currentBuilding}})
                .success(function(res) {
                    if (res.ret) {
                        $scope.param.title = res.data.title;
                        $scope.param.content = res.data.content;
                        $scope.needCreate = 0;
                        editor.setData($scope.param.content );
                    }
                    else{
                        $scope.needCreate = 1;
                    }
                    
                })
            } 
            getLouDesc()         
            $scope.submit = function() {
                var SUBMIT_URL = URL_ADD_DESC;
                if($scope.needCreate == 0){
                    SUBMIT_URL = URL_UPDATE_DESC;
                }
                $scope.param.content = editor.getData();
                if ($scope.form.$valid) {
                    $scope.param.id = $scope.currentBuilding;
                    $scope.param.content = editor.getData()
                    $http.post(SUBMIT_URL,$scope.param)
                    .success(function(res){
                        if( res.ret ){
                            $scope.alert("提交成功");
                            $location.path("/room/lou_desc")
                        }else{  
                            $scope.alert(res.errmsg);
                        }
                    })
                }
            }
        })
        .controller('RoomCtrl', function($scope, $rootScope, $http, $vars) {

            var URL_LIST = "/api/bodhi/query/rooms.htm",
                URL_DEL = "/api/bodhi/manage/hotelRoomDel.htm";

            $rootScope.nav = "room";

            $scope.building = $vars.building;

            $scope.currentBuilding = "1";

            $scope.changeBuilding = function(){
              getList()
            }

            $scope.del = function(one){
                $scope.confirm("是否确认删除该条？",function(){
                    $http.post(URL_DEL,{id:one.id})
                        .success(function(res){
                            if( res.ret ){
                                one.markDel = true;
                                $scope.alert("删除成功");
                            }else{  
                                $scope.alert(res.errmsg);
                            }
                        })
                });
            }

            function getList(){
                $http.get(URL_LIST,{params:{id:$scope.currentBuilding}})
                .success(function(res) {
                    if (res.ret) {
                        $scope.list = res.data.list || [];
                    }
                })
            }

            getList();


        })
        .controller('RoomAddCtrl', function($scope, $rootScope, $http,$routeParams,$location,$vars) {

            var SUBMIT_URL = $routeParams.id ? "/api/bodhi/manage/hotelRoomUpdate.htm" : "/api/bodhi/manage/hotelRoomAdd.htm"

            $scope.param = {
                "id" : $routeParams.id || "",
                "buildNum" : "1",
                "roomName" : "",
                "imgList" : []
            }

            $scope.imgList = [""];

            $scope.building = $vars.building;

            $scope.types = $vars.types;

            if( $scope.param.id ){
                $http.get("/api/bodhi/query/roomDetail.htm",{params:{id:$scope.param.id}})
                    .success(function(res){
                        if(res.ret){
                            $scope.param.roomName = res.data.roomName;
                            $scope.param.buildNum = res.data.buildNum+"";
                            $scope.imgList = res.data.imgList && res.data.imgList.length ? res.data.imgList : [""];
                            // $scope.param.imgList = res.data.imgList && res.data.imgList.length ? res.data.imgList : [""];
                        }
                    })
            }

            $rootScope.nav = "roomAdd";

            $scope.addPic = function(){
              $scope.imgList.push("");
            }

            $scope.submit = function() {
                var $list = $(".img-list");
                if ($scope.form.$valid) {
                    $scope.param.imgList = [];
                    $list.each(function(i,v){
                        var value = $(v).val();
                        if(!!value){
                            $scope.param.imgList.push(value);
                        }
                    });
                    if( !$scope.param.imgList.length ) {
                        return false;
                    }
                    $http.post(SUBMIT_URL,$scope.param)
                    .success(function(res){
                        if( res.ret ){
                            $scope.alert("提交成功");
                            $location.path("/room")
                        }else{  
                            $scope.alert(res.errmsg);
                        }
                    })
                }
            }
        });

})();
