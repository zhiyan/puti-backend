(function() {
    'use strict';


    angular.module('view-news', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/news', {
                    templateUrl: 'news/news.html',
                    controller: 'NewsCtrl'
                })
                .when('/news/add', {
                    templateUrl: 'news/newsAdd.html',
                    controller: 'NewsAddCtrl'
                })
                .when('/news/edit/:id', {
                    templateUrl: 'news/newsAdd.html',
                    controller: 'NewsAddCtrl'
                });
        })
        .controller('NewsCtrl', function($scope, $rootScope,$http) {
            var URL_LIST = "/api/bodhi/query/news.htm",
                URL_DEL = "/api/bodhi/manage/hotelNewsDel.htm";

            $rootScope.nav = "news";

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
            
            $http.get(URL_LIST)
                .success(function(res) {
                    if (res.ret) {
                        $scope.list = res.data.list || [];
                    }
                })
        })
        .controller('NewsAddCtrl', function($scope, $rootScope, $http,$routeParams,$location,$vars) {

            var URL_UPLOAD =  $routeParams.id ? "/api/bodhi/manage/hotelNewsUpdate.htm" : "/api/bodhi/manage/hotelNewsAdd.htm",
                URL_GETDATA = "/api/bodhi/query/newsDetail.htm";

            var editor;

            $scope.param = {
                "id" : $routeParams.id || "",
                "title" : "",
                "type" : $vars.types[0].id + "",
                "content" : "",
                "body" : "",
                "imgUrl" : "",
                "createDate" : "",
            }

            $scope.types = $vars.types;

            if( $scope.param.id ){
                $http.get(URL_GETDATA,{params:{id:$scope.param.id}})
                    .success(function(res){
                        if(res.ret){
                            $scope.param.title = res.data.title;
                            $scope.param.content = res.data.content;
                            $scope.param.type = res.data.type + "";
                            $scope.param.body = res.data.body;
                            $scope.param.imgUrl = res.data.imgUrl;
                            $scope.param.createDate = res.data.createDate;

                            editor = CKEDITOR.replace('editor',{language : 'zh-cn'});
                        }
                    })
            }else{
                editor = CKEDITOR.replace('editor',{language : 'zh-cn'});
            }

            $rootScope.nav = "newsAdd";

            $scope.submit = function() {

                // body
                $scope.param.body = editor.getData();

                if ($scope.form.$valid) {
                    $http.post(URL_UPLOAD,$scope.param)
                    .success(function(res){
                        if( res.ret ){
                            $scope.alert("提交成功");
                            $location.path("/news")
                        }else{  
                            $scope.alert(res.errmsg);
                        }
                    })
                }
            }
        });

})();
