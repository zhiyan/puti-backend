(function() {
    'use strict';


    angular.module('view-product', ['ngRoute'])
        .config(function($routeProvider) {
            $routeProvider
                .when('/product', {
                    templateUrl: 'product/product.html',
                    controller: 'ProductCtrl'
                })
                .when('/product/add', {
                    templateUrl: 'product/productAdd.html',
                    controller: 'ProductAddCtrl'
                })
                .when('/product/edit/:id', {
                    templateUrl: 'product/productAdd.html',
                    controller: 'ProductAddCtrl'
                });
        })
        .controller('ProductCtrl', function($scope, $rootScope, $http) {

            var URL_LIST = "/api/bodhi/query/product.htm",
                URL_DEL = "/api/bodhi/manage/hotelProductDel.htm";

            $rootScope.nav = "product";

            $scope.del = function(one){
                $scope.confirm("是否确认删除该条？",function(){
                    $http.post(URL_DEL,{id:one.id})
                        .success(function(res){
                            if( res.ret ){
                                one.markDel = true;
                                $scope.alert("删除成功");
                            }else{  
                                $scope.alert(res.msg);
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
        .controller('ProductAddCtrl', function($scope, $rootScope, $http,$routeParams,$location,$vars) {

            var URL_UPLOAD = $routeParams.id ? "/api/bodhi/manage/hotelProductUpdate.htm" : "/api/bodhi/manage/hotelProductAdd.htm",
                URL_GETDATA = "/api/bodhi/query/productDetail.htm";

            $scope.param = {
                "id" : $routeParams.id || "",
                "title" : "",
                "type" : $vars.types[0].id + "",
                "content" : "",
                "imgUrl" : ""
            }

            $scope.types = $vars.types;

            if( $scope.param.id ){
                $http.get(URL_GETDATA,{params:{id:$scope.param.id}})
                    .success(function(res){
                        if(res.ret){
                            $scope.param.title = res.data.title;
                            $scope.param.content = res.data.content;
                            $scope.param.type = res.data.type + "";
                            $scope.param.imgUrl = res.data.imgUrl;
                        }
                    })
            }

            $rootScope.nav = "productAdd";

            $scope.submit = function() {
                if ($scope.form.$valid) {
                    $http.post(URL_UPLOAD,$scope.param)
                    .success(function(res){
                        if( res.ret ){
                            $scope.alert("提交成功");
                            $location.path("/product")
                        }else{  
                            $scope.alert(res.msg);
                        }
                    })
                }
            }
        });

})();
