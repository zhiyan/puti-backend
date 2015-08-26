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
            var URL_LIST = "/data/product.json";

            $rootScope.nav = "news";
            
            $http.get(URL_LIST)
                .success(function(res) {
                    if (res.status) {
                        $scope.list = res.data || [];
                    }
                })
        })
        .controller('NewsAddCtrl', function($scope, $rootScope, $http,$routeParams,$location,$vars) {

            var URL_UPLOAD = "/data/product.json",
                URL_GETDATA = "/data/productdetail.json";

            // ckeditor
            var editor = CKEDITOR.replace('editor',{language : 'zh-cn'});

            $scope.param = {
                "id" : $routeParams.id || "",
                "title" : "",
                "type" : $vars.types[0].id + "",
                "desc" : "",
                "body" : "",
                "url" : ""
            }

            $scope.types = $vars.types;

            if( $scope.param.id ){
                $http.get(URL_GETDATA,{params:{id:$scope.param.id}})
                    .success(function(res){
                        if(res.status){
                            $scope.param.title = res.data.title;
                            $scope.param.desc = res.data.desc;
                            $scope.param.type = res.data.type + "";
                        }
                    })
            }

            $rootScope.nav = "newsAdd";

            $scope.submit = function() {

                // body
                $scope.param.body = editor.getData();

                if ($scope.form.$valid) {
                    $http.post(URL_UPLOAD,$scope.param)
                    .success(function(res){
                        if( res.status ){
                            $scope.alert("提交成功");
                            $location.path("/product/list")
                        }else{  
                            $scope.alert(res.msg);
                        }
                    })
                }
            }
        });

})();
