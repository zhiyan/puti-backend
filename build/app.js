(function(){
	'use strict';

	angular.module('backend', [ 
		'ngRoute',
		'modal',
		'ngFileUpload',
		'view-nav',
		'view-login',
		'view-activity',
		'view-location',
		'view-kitchen',
		'view-news',
		'view-accommodation',
		'view-home',
		'view-product',
		'view-account',
		'templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/login'
	      });
	  })
	  .service("$vars",function(){
	  	this.types = [
	  		{"id" : 1, "name" : "食"},
	  		{"id" : 2, "name" : "游"},
	  		{"id" : 3, "name" : "物"}
	  	]
	  });
	  
})();
(function(){

angular.module("backend")

.controller("MainController",function($scope){

	$scope.alert = function(title,body){
		if( !body ){
			body = title || "未知错误";
			title = "提示";
		}
		$scope.$broadcast("modal",title,body);
	}
});



})();
(function(){
  'use strict';


  angular.module('view-accommodation',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/accommodation', {
          templateUrl: 'accommodation/accommodation.html',
          controller: 'AccommodationCtrl'
        });
    })
    .controller('AccommodationCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "accommodation";
    });

})();
(function(){
  'use strict';


  angular.module('view-activity',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/activity', {
          templateUrl: 'activity/activity.html',
          controller: 'ActivityCtrl'
        });
    })
    .controller('ActivityCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "activity";
    });

})();
(function(){
  'use strict';


  angular.module('view-account',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/account', {
          templateUrl: 'account/account.html',
          controller: 'AccountCtrl'
        });
    })
    .controller('AccountCtrl', function ($scope,$rootScope,$http) {
      $rootScope.nav = "account";

      $scope.notConfirm = false;

      $scope.reset = function(){
         $scope.param = {
          "oldPasswd" : "",
          "newPasswd" : "",
          "confirmPasswd" : ""
        }
      }

      $scope.submit = function(){

        if($scope.newPasswd !== $scope.confirmPasswd ){
          $scope.notConfirm = true;
          return false;
        }else{
          $scope.notConfirm = false;
        }
        
        if($scope.form.$valid){
          $scope.alert();
          $http.post("/admin/login",$scope.param).success(function(res){
            if(res.ret){
              alert("修改密码成功");
            }else{
              $scope.alert(res.msg);
            }
          });
        }
        return false;
      }

      $scope.reset();
    });

})();
'common service goes here';
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
(function(){
  'use strict';


  angular.module('view-kitchen',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/kitchen', {
          templateUrl: 'kitchen/kitchen.html',
          controller: 'KitchenCtrl'
        });
    })
    .controller('KitchenCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "kitchen";
    });

})();
(function(){
  'use strict';


  angular.module('view-location',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/location', {
          templateUrl: 'location/location.html',
          controller: 'LocationCtrl'
        });
    })
    .controller('LocationCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "location";
    });

})();
(function(){
  'use strict';


  angular.module('view-login',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/login', {
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
        });
    })
    .controller('LoginCtrl', function ($scope,$rootScope,$location) {

      $rootScope.logined = true;

      $scope.param = {
        "username" : "admin",
        "password" : ""
      }

      if( $rootScope.logined ){
        $location.path("/news/add")
      }

      $scope.login = function(){
        this["login-form"].$setDirty();
        if( this["login-form"].$valid ){
          console.log($scope.param)
        }
        return false;
      };
    });

})();
(function(){
  'use strict';


  angular.module('view-nav',['ngRoute'])
    .controller('NavCtrl', function ($scope) {

    });

})();
(function(){
  'use strict';


  angular.module('modal',[])
    .controller("ModalController", function($scope){

		$scope.title="";
		$scope.body="";

		$scope.$on("modal",function(evt,title,body){
			$scope.title = title;
			$scope.body = body;
		});

		$scope.close = function(){
			$scope.title="";
			$scope.body="";
		}

	});

})();
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
        .controller('NewsAddCtrl', function($scope, $rootScope, $http, Upload,$routeParams,$location,$vars) {

            var URL_UPLOAD = "/data/product.json",
                URL_GETDATA = "/data/productdetail.json";

            // ckeditor
            var editor = CKEDITOR.replace('editor',{language : 'zh-cn'});

            $scope.param = {
                "id" : $routeParams.id || "",
                "title" : "",
                "type" : $vars.types[0].id + "",
                "desc" : "",
                "body" : ""
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

                // file
                if( !$scope.file ){
                    $scope.showUploadTip = true;
                }else{
                    $scope.showUploadTip = false;
                }

                // body
                $scope.param.body = editor.getData();

                if ($scope.form.$valid && $scope.file) {
                    Upload.upload({
                        url: URL_UPLOAD,
                        fields: $scope.param,
                        file: $scope.file
                    }).success(function(res, status, headers, config) {
                        if( res.status ){
                            $scope.alert("提交成功");
                            $location.path("/product/list")
                        }else{  
                            $scope.alert(res.msg);
                        }

                    }).error(function(data, status, headers, config) {
                        $scope.alert("提交失败，请稍后重试")
                    })
                }
            }
        });

})();

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
        .controller('ProductAddCtrl', function($scope, $rootScope, $http, Upload,$routeParams,$location,$vars) {

            var URL_UPLOAD = "/data/product.json",
                URL_GETDATA = "/data/productdetail.json";

            $scope.param = {
                "id" : $routeParams.id || "",
                "title" : "",
                "type" : $vars.types[0].id + "",
                "desc" : ""
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
                if( !$scope.file ){
                    $scope.showUploadTip = true;
                }else{
                    $scope.showUploadTip = false;
                }
                if ($scope.form.$valid && $scope.file) {
                    Upload.upload({
                        url: URL_UPLOAD,
                        fields: $scope.param,
                        file: $scope.file
                    }).success(function(res, status, headers, config) {
                        if( res.status ){
                            $scope.alert("提交成功");
                            $location.path("/product/list")
                        }else{  
                            $scope.alert(res.msg);
                        }

                    }).error(function(data, status, headers, config) {
                        $scope.alert("提交失败，请稍后重试")
                    })
                }
            }
        });

})();
