angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("about/about.html","<div class=\"home wrap\">\n	<h2>源管理</h2>\n</div>");
$templateCache.put("accommodation/accommodation.html","<div class=\"home wrap\">\n	<h2>住管理</h2>\n</div>");
$templateCache.put("activity/activity.html","<div class=\"home wrap\">\n	<h2>游管理</h2>\n</div>");
$templateCache.put("account/account.html","<div class=\"home wrap\">\n	<h2>账户管理</h2>\n</div>");
$templateCache.put("home/home.html","<div class=\"home wrap\">\n	<h2>首页管理</h2>\n</div>");
$templateCache.put("kitchen/kitchen.html","<div class=\"home wrap\">\n	<h2>食管理</h2>\n</div>");
$templateCache.put("location/location.html","<div class=\"home wrap\">\n	<h2>如何到达管理</h2>\n</div>");
$templateCache.put("login/login.html","<from class=\"modal-dialog modal-lg login\">\n	<div class=\"modal-content\">\n        <div class=\"modal-header ng-scope\">\n            <h3 class=\"modal-title\">后台系统登录</h3>\n        </div>\n        <div class=\"modal-body ng-scope\">\n        \n		  <div class=\"form-group\">\n		    <label for=\"accountName\">用户名</label>\n		    <input type=\"text\" class=\"form-control\" id=\"accountName\" placeholder=\"请输入用户名\">\n		  </div>\n		  <div class=\"form-group\">\n		    <label for=\"password\">密码</label>\n		    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"请输入密码\">\n		  </div>\n\n        </div>\n        <div class=\"modal-footer ng-scope\">\n            <button class=\"btn btn-primary\" ng-click=\"login()\">登陆</button>\n        </div>\n    </div>\n</form>");
$templateCache.put("nav/nav.html","<h6>菩提谷后台管理系统</h6>\n<ul>\n	<li><a href=\"#/home\" ng-class=\"{\'cur\':nav===\'home\'}\">首页管理</a></li>\n	<li><a href=\"#/about\" ng-class=\"{\'cur\':nav===\'about\'}\">源管理</a></li>\n	<li><a href=\"#/accommodation\" ng-class=\"{\'cur\':nav===\'accommodation\'}\">住管理</a></li>\n	<li><a href=\"#/kitchen\" ng-class=\"{\'cur\':nav===\'kitchen\'}\">食管理</a></li>\n	<li><a href=\"#/activity\" ng-class=\"{\'cur\':nav===\'activity\'}\">游管理</a></li>\n	<li><a href=\"#/product\" ng-class=\"{\'cur\':nav===\'product\'}\">物管理</a></li>\n	<li><a href=\"#/location\" ng-class=\"{\'cur\':nav===\'location\'}\">如何到达</a></li>\n	<li><a href=\"#/account\" ng-class=\"{\'cur\':nav===\'account\'}\">更改密码</a></li>\n</ul>");
$templateCache.put("product/product.html","<div class=\"home wrap\">\n	<h2>物管理</h2>\n</div>");}]);