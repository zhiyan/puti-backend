(function(){
  'use strict';


  angular.module('view-news',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/news', {
          templateUrl: 'news/news.html',
          controller: 'NewsCtrl'
        });
    })
    .controller('NewsCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "news";
    });

})();