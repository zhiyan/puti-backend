(function(){
	'use strict';

	angular.module('backend', [ 
		'ui.bootstrap',
		'ngRoute',
		'view-nav',
		'view-login',
		'view-activity',
		'view-location',
		'view-kitchen',
		'view-about',
		'view-accommodation',
		'view-home',
		'view-product',
		'view-account',
		'templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();

(function(){
  'use strict';


  angular.module('view-about',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/about', {
          templateUrl: 'about/about.html',
          controller: 'AboutCtrl'
        });
    })
    .controller('AboutCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "about";
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
    .controller('AccountCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "account";
    });

})();
'common service goes here';
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
    .controller('HomeCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "home";
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
        .when('/', {
          templateUrl: 'login/login.html',
          controller: 'LoginCtrl'
        });
    })
    .controller('LoginCtrl', function ($scope,$rootScope) {

      $rootScope.nav = true;

      $scope.login = function(){
        // TOTO: LOGIN
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


  angular.module('view-product',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/product', {
          templateUrl: 'product/product.html',
          controller: 'ProductCtrl'
        });
    })
    .controller('ProductCtrl', function ($scope,$rootScope) {
      $rootScope.nav = "product";
    });

})();