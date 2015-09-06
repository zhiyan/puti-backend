angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("account/account.html","<section class=\"content-header\">\n	<h1>账户管理</h1>\n</section>\n\n<section class=\"content\">\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n			<div class=\"box box-primary\">\n				<div class=\"box-header with-border\">\n                  <h3 class=\"box-title\">更改密码</h3>\n                </div>\n                <!-- form start -->\n                <form role=\"form\" name=\"form\" method=\"post\">\n                  <div class=\"box-body\">\n                    <div class=\"form-group\">\n                      <label for=\"oldPasswd\">原密码</label>\n                      <input type=\"password\" class=\"form-control\" id=\"oldPasswd\" required ng-model=\"oldPasswd\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"newPasswd\">新密码</label>\n                      <input type=\"password\" class=\"form-control\" id=\"newPasswd\" required ng-model=\"newPasswd\">\n                    </div>\n                    <div class=\"form-group\">\n                      <label for=\"confirmPasswd\">确认密码</label>\n                      <input type=\"password\" class=\"form-control\" id=\"confirmPasswd\" required ng-model=\"confirmPasswd\">\n                    </div>\n                    <p ng-if=\"notConfirm\">两次输入的密码不一致</p>\n                  </div><!-- /.box-body -->\n\n                  <div class=\"box-footer\">\n                    <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"submit()\">确认更改</button>\n                  </div>\n                </form>\n              </div><!-- /.box -->\n\n            </div>\n	</div>\n</section>");
$templateCache.put("activity/activity.html","<div class=\"home wrap\">\n	<h2>游管理</h2>\n</div>");
$templateCache.put("home/home.html","<section class=\"content-header\">\n	<h1>首页轮播图管理</h1>\n</section>\n\n<section class=\"content view-home\">\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n\n		<div class=\"box\">\n\n			<div class=\"box-body\">\n              <table class=\"table table-bordered\">\n                <tbody>\n                <tr>\n                  <th style=\"width: 10px\">#</th>\n                  <th>URL</th>\n                  <th width=\"150px\">操作</th>\n                </tr>\n                <tr ng-repeat=\"one in list\">\n                  <td>{{one.id}}.</td>\n                  <td>\n                  	<input type=\"text\" ng-model=\"one.imgUrl\" style=\"width:80%\">\n                  </td>	\n                  <td>\n                    <button type=\"button\" class=\"btn btn-default btn-sm\" ng-click=\"edit(one)\">修改</button>\n                  	<button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"del(one)\">删除</button>\n                  </td>\n                </tr>\n              </tbody></table>\n            </div>\n              \n\n        </div>\n	</div>\n</section>");
$templateCache.put("location/location.html","<div class=\"home wrap\">\n	<h2>如何到达管理</h2>\n</div>");
$templateCache.put("login/login.html","<div class=\"login-box\">\n	<div class=\"login-logo\"> <b>融360图片管理后台</b>\n	</div>\n	<div class=\"login-box-body\">\n		<p class=\"login-box-msg\">请登陆</p>\n		<form name=\"login-form\" novalidate>\n			<div class=\"form-group has-feedback\">\n				<input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"用户名\" ng-model=\"param.username\" disabled>\n				<span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n			</div>\n			<div class=\"form-group has-feedback\">\n				<input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"密码\" ng-model=\"param.password\" required >\n				<span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n			</div>\n			<div class=\"row\">\n				<div class=\"col-xs-4\">\n					<button type=\"submit\" class=\"btn btn-primary btn-block btn-flat\" ng-click=\"login()\">登录</button>\n				</div>\n			</div>\n		</form>\n	</div>\n</div>");
$templateCache.put("modal/modal.html","<div class=\"modal common-modal\" ng-if=\"title && body\" style=\"display:block;\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" ng-click=\"close()\"><span aria-hidden=\"true\">×</span></button>\n            <h4 class=\"modal-title\">{{title}}</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>{{body}}</p>\n          </div>\n          <div class=\"modal-footer\" ng-if=\"!cb\">\n            <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\" ng-click=\"close()\">确认</button>\n          </div>\n          <div class=\"modal-footer\" ng-if=\"cb\">\n            <button type=\"button\" class=\"btn btn-warning pull-left\" data-dismiss=\"modal\" ng-click=\"cb()\">确认</button>\n            <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\" ng-click=\"close()\">取消</button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dialog -->\n    </div>");
$templateCache.put("nav/nav.html","<aside class=\"main-sidebar\">\n	<section class=\"sidebar\">\n		<ul class=\"sidebar-menu\">\n			<li class=\"treeview\" ng-class=\"{\'active\':nav===\'home\'}\">\n				<a href=\"#/home\"> <i class=\"fa fa-home\"></i>\n					<span>首页轮播图</span>\n				</a>\n			</li>\n			<li class=\"treeview\" ng-class=\"{\'active\':nav===\'news\' || nav === \'newsAdd\'}\">\n				<a href=\"#/news\"> <i class=\"fa fa-book\"></i>\n					<span>咨询管理</span>\n					<i class=\"fa fa-angle-left pull-right\"></i>\n				</a>\n				<ul class=\"treeview-menu\">\n	                <li ng-class=\"{\'active\':nav===\'news\'}\"><a href=\"#/news\"><i class=\"fa fa-circle-o\"></i> 咨询列表</a></li>\n	                <li ng-class=\"{\'active\':nav===\'newsAdd\'}\"><a href=\"#/news/add\"><i class=\"fa fa-circle-o\"></i> 新建咨询</a></li>\n	             </ul>\n			</li>\n			<li class=\"treeview\" ng-class=\"{\'active\':nav===\'room\' || nav === \'roomAdd\'}\">\n				<a href=\"#/room\"> <i class=\"fa fa-bed\"></i>\n					<span>房间管理</span>\n					<i class=\"fa fa-angle-left pull-right\"></i>\n				</a>\n				<ul class=\"treeview-menu\">\n	                <li ng-class=\"{\'active\':nav===\'room\'}\"><a href=\"#/room\"><i class=\"fa fa-circle-o\"></i> 房间列表</a></li>\n	                <li ng-class=\"{\'active\':nav===\'roomAdd\'}\"><a href=\"#/room/add\"><i class=\"fa fa-circle-o\"></i> 新增房间</a></li>\n	             </ul>\n			</li>\n			<!-- \n			<li class=\"treeview\" ng-class=\"{\'active\':nav===\'kitchen\'}\">\n				<a href=\"#/kitchen\">\n					<i class=\"fa fa-dashboard\"></i>\n					<span>食管理</span>\n				</a>\n			</li>\n			<li class=\"treeview\" ng-class=\"{\'active\':nav===\'activity\'}\">\n				<a href=\"#/activity\">\n					<i class=\"fa fa-dashboard\"></i>\n					<span>游管理</span>\n				</a>\n			</li> -->\n			<li class=\"treeview\" ng-class=\"{\'active\':nav===\'product\' || nav === \'productAdd\'}\">\n				<a href=\"#/product\">\n					<i class=\"fa fa-cube\"></i>\n					<span>物品管理</span>\n					<i class=\"fa fa-angle-left pull-right\"></i>\n				</a>\n				<ul class=\"treeview-menu\">\n	                <li ng-class=\"{\'active\':nav===\'product\'}\"><a href=\"#/product\"><i class=\"fa fa-circle-o\"></i> 物品列表</a></li>\n	                <li ng-class=\"{\'active\':nav===\'productAdd\'}\"><a href=\"#/product/add\"><i class=\"fa fa-circle-o\"></i> 新建物品</a></li>\n	              </ul>\n			</li>\n			<li class=\"treeview\" ng-class=\"{\'active\':nav===\'pics\'}\">\n				<a href=\"#/pics\">\n					<i class=\"fa fa-file-photo-o \"></i>\n					<span>图片管理</span>\n				</a>\n			</li>\n			<li class=\"treeview\" ng-class=\"{\'active\':nav===\'account\'}\">\n				<a href=\"#/account\">\n					<i class=\"fa fa-user-secret\"></i>\n					<span>账户管理</span>\n				</a>\n			</li>\n		</ul>\n	</section>\n</aside>");
$templateCache.put("news/news.html","<section class=\"content-header\">\n	<h1>咨询管理</h1>\n</section>\n\n<section class=\"content view-home\">\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n\n		<div class=\"box\">\n\n			<div class=\"box-header with-border\">\n          <h3 class=\"box-title\">咨询列表</h3>\n          <a class=\"btn btn-primary btn-sm\" href=\"#/news/add\">新增</a>\n      </div>\n\n			<div class=\"box-body\">\n              <table class=\"table table-bordered\">\n                <tbody>\n                <tr>\n                  <th style=\"width: 10px\">#</th>\n                  <th>预览</th>\n                  <th style=\"width:25%;\">标题</th>\n                  <th style=\"width:25%;\">描述</th>\n                  <th style=\"width:150px;\">操作</th>\n                </tr>\n                <tr ng-repeat=\"one in list\" ng-if=\"!one.markDel\">\n                  <td>{{one.id}}.</td>\n                  <td>\n                  	<img src=\"{{one.imgUrl}}-thumb\">\n                  </td>\n                  <td>{{one.title}}</td>	\n                  <td>{{one.content}}</td>\n                  <td>\n                  	<a class=\"btn btn-default btn-sm\" href=\"#/news/edit/{{one.id}}\">修改</a>\n                  	<button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"del(one)\">删除</button>\n                  </td>\n                </tr>\n              </tbody></table>\n            </div>\n\n        </div>\n              \n\n        </div>\n	</div>\n</section>");
$templateCache.put("news/newsAdd.html","<section class=\"content-header\">\n    <h1>咨询管理</h1>\n</section>\n<section class=\"content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"box box-primary\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{param.id ? \"修改\" : \"添加\"}}咨询</h3>\n                </div>\n                <form role=\"form\" name=\"form\" method=\"post\">\n                    <div class=\"box-body\">\n                        <div class=\"form-group\">\n                            <label for=\"title\">标题</label>\n                            <input type=\"text\" class=\"form-control\" id=\"title\" required ng-model=\"param.title\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"type\">栏目类别</label>\n                            <select class=\"form-control\" id=\"type\" ng-model=\"param.type\">\n                              <option value=\"{{one.id}}\" ng-repeat=\"one in types\">{{one.name}}</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"desc\">描述</label>\n                            <input type=\"text\" class=\"form-control\" id=\"desc\" required ng-model=\"param.content\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>图片URL</label>\n                            <input type=\"text\" class=\"form-control\" id=\"url\" required ng-model=\"param.imgUrl\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"body\">内容</label>\n                            <br>\n                            <textarea name=\"editor\" id=\"editor\" rows=\"10\" cols=\"80\" class=\"form-control\">{{param.body}}</textarea>\n                        </div>\n                    </div>\n                    <div class=\"box-footer\">\n                        <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"submit()\">确认更改</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n");
$templateCache.put("page/footer.html","<footer class=\"main-footer\" >\n	<div class=\"pull-right hidden-xs\"> <b>Version</b>\n		1.0.0\n	</div> <strong>Copyright &copy; 2014-2015\n		<a href=\"/\">菩提谷</a>\n		.</strong> \n	All rights reserved.\n</footer>");
$templateCache.put("page/header.html","<header class=\"main-header\">\n  <a href=\"#/\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"> <b>菩</b>\n      提谷\n    </span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"> <b>菩提谷</b>\n      Admin\n    </span>\n  </a>\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <a href=\"javascript:void(0)\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\"></a>\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#/account\">\n            <span class=\"hidden-xs\">管理员</span>\n          </a>\n        </li>\n        <li>\n          <a href=\"#/account\">\n            <i class=\"fa fa-gears\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>");
$templateCache.put("pics/pics.html","<section class=\"content-header\">\n  <h1>图片管理</h1>\n</section>\n\n<section class=\"content view-pics\" id=\"pics-container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <div class=\"box\">\n\n        <div class=\"box-header with-border\">\n          <a class=\"btn btn-primary btn-lg\" id=\"pickfiles\" href=\"#\"> <i class=\"glyphicon glyphicon-plus\"></i>\n            <span>选择文件</span>\n          </a>\n          <span class=\"fr\">高级管理请到<a href=\"https://portal.qiniu.com/bucket/zhiyan/resource\" target=\"_blank\">七牛图片CDN管理后台</a></span>\n        </div>\n\n        <div class=\"box-body\">\n\n          <div style=\"display:none\" id=\"pics-success\" class=\"col-md-12\">\n            <div class=\"alert-success\">\n                队列全部文件处理完毕\n            </div>\n          </div>\n\n          <div class=\"col-md-12 \">\n            <table class=\"table table-striped table-hover text-left\" id=\"pics-table\" style=\"margin-top:20px;display:none\">\n                <thead>\n                  <tr>\n                    <th class=\"col-md-4\">文件名</th>\n                    <th class=\"col-md-2\">大小</th>\n                    <th class=\"col-md-6\">详情</th>\n                  </tr>\n                </thead>\n                <tbody id=\"fsUploadProgress\">\n                </tbody>\n            </table>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</section>");
$templateCache.put("product/product.html","<section class=\"content-header\">\n	<h1>物品管理</h1>\n</section>\n\n<section class=\"content view-home\">\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n\n		<div class=\"box\">\n\n			<div class=\"box-header with-border\">\n                <h3 class=\"box-title\">物品列表</h3>\n                <a class=\"btn btn-primary btn-sm\" href=\"#/product/add\">新增</a>\n            </div>\n\n			<div class=\"box-body\">\n              <table class=\"table table-bordered\">\n                <tbody>\n                <tr>\n                  <th style=\"width: 10px\">#</th>\n                  <th>预览</th>\n                  <th style=\"width:25%;\">标题</th>\n                  <th style=\"width:25%;\">描述</th>\n                  <th style=\"width:150px;\">操作</th>\n                </tr>\n                <tr ng-repeat=\"one in list\" ng-if=\"!one.markDel\">\n                  <td>{{one.id}}.</td>\n                  <td>\n                  	<img src=\"{{one.imgUrl}}-thumb\">\n                  </td>\n                  <td>{{one.title}}</td>	\n                  <td>{{one.content}}</td>\n                  <td>\n                  	<a class=\"btn btn-default btn-sm\" href=\"#/product/edit/{{one.id}}\">修改</a>\n                  	<button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"del(one)\">删除</button>\n                  </td>\n                </tr>\n              </tbody></table>\n            </div>\n\n        </div>\n              \n\n        </div>\n	</div>\n</section>");
$templateCache.put("product/productAdd.html","<section class=\"content-header\">\n    <h1>物品管理</h1>\n</section>\n<section class=\"content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"box box-primary\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{param.id ? \"修改\" : \"添加\"}}物品</h3>\n                </div>\n                <form role=\"form\" name=\"form\" method=\"post\">\n                    <div class=\"box-body\">\n                        <div class=\"form-group\">\n                            <label for=\"title\">标题</label>\n                            <input type=\"text\" class=\"form-control\" id=\"title\" required ng-model=\"param.title\">\n                        </div>\n                       <!--  <div class=\"form-group\">\n                            <label for=\"type\">栏目类别</label>\n                            <select class=\"form-control\" id=\"type\" ng-model=\"param.type\">\n                              <option value=\"{{one.id}}\" ng-repeat=\"one in types\">{{one.name}}</option>\n                            </select>\n                        </div> -->\n                        <div class=\"form-group\">\n                            <label for=\"desc\">描述</label>\n                            <input type=\"text\" class=\"form-control\" id=\"desc\" required ng-model=\"param.content\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label>图片URL</label>\n                            <input type=\"text\" class=\"form-control\" id=\"url\" required ng-model=\"param.imgUrl\">\n                        </div>\n                    </div>\n                    <div class=\"box-footer\">\n                        <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"submit()\">确认更改</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n");
$templateCache.put("room/room.html","<section class=\"content-header\">\n	<h1>咨询管理</h1>\n</section>\n\n<section class=\"content view-room\">\n	<div class=\"row\">\n		<div class=\"col-md-12\">\n\n		<div class=\"box\">\n\n			<div class=\"box-header with-border\">\n                <h3 class=\"box-title\">房间列表</h3>\n                <div class=\"form-inline\" style=\"float:right;\">\n                  <select ng-model=\"currentBuilding\" class=\"form-control form-inline\" ng-change=\"changeBuilding()\">\n                    <option value=\"{{one}}\" ng-repeat=\"one in building\">{{one}}号楼</option>\n                  </select>\n                </div>\n            </div>\n\n			<div class=\"box-body\">\n              <table class=\"table table-bordered\">\n                <tbody>\n                <tr>\n                  <th style=\"width: 10px\">#</th>\n                  <th style=\"width:25%;\">房间名</th>\n                  <th>图片</th>\n                  <th style=\"width:25%;\">操作</th>\n                </tr>\n                <tr ng-repeat=\"one in list\" ng-if=\"!one.markDel\">\n                  <td>{{one.id}}.</td>\n                  <td>{{one.roomName}}</td>	\n                  <td>\n                    <p ng-repeat=\"img in one.imgList track by $index\">\n                      <a href=\"{{img}}\" target=\"_blank\" >{{img}}</a>\n                    </p>\n                  </td>\n                  <td>\n                  	<a class=\"btn btn-default btn-sm\" href=\"#/room/edit/{{one.id}}\">修改</a>\n                  	<button type=\"button\" class=\"btn btn-danger btn-sm\" ng-click=\"del(one)\">删除</button>\n                  </td>\n                </tr>\n              </tbody></table>\n            </div>\n\n        </div>\n              \n\n        </div>\n	</div>\n</section>");
$templateCache.put("room/roomAdd.html","<section class=\"content-header\">\n    <h1>房间管理</h1>\n</section>\n<section class=\"content\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"box box-primary\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{param.id ? \"修改\" : \"添加\"}}房间</h3>\n                </div>\n                <form role=\"form\" name=\"form\" method=\"post\">\n                    <div class=\"box-body\">\n                        <div class=\"form-group\">\n                            <label for=\"name\">房间名称</label>\n                            <input type=\"text\" class=\"form-control\" id=\"name\" required ng-model=\"param.roomName\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"type\">所属建筑</label>\n                            <select class=\"form-control\" id=\"type\" ng-model=\"param.buildNum\">\n                              <option value=\"{{one}}\" ng-repeat=\"one in building\">{{one}}号楼</option>\n                            </select>\n                        </div>\n                        <div class=\"form-group\">\n                            <label>图片URL</label>\n                            <input type=\"text\" class=\"form-control img-list\" ng-repeat=\"one in imgList track by $index\" style=\"margin-bottom:10px;\">\n                            <button class=\"btn btn-sm btn-default\" ng-click=\"addPic()\">添加图片</button>\n                        </div>\n                    </div>\n                    <div class=\"box-footer\">\n                        <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"submit()\">确认更改</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</section>\n");}]);