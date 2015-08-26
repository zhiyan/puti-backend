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

            var URL_LIST = "/data/product.json";

            $rootScope.nav = "product";

            $http.get(URL_LIST)
                .success(function(res) {
                    if (res.status) {
                        $scope.list = res.data || [];
                    }
                })


        })
        .controller('ProductAddCtrl', function($scope, $rootScope, $http,$routeParams,$location,$vars) {

            var URL_UPLOAD = "/data/product.json",
                URL_GETDATA = "/data/productdetail.json";

            $scope.param = {
                "id" : $routeParams.id || "",
                "title" : "",
                "type" : $vars.types[0].id + "",
                "desc" : "",
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

            $rootScope.nav = "productAdd";

            $scope.submit = function() {
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
