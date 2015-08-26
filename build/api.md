# api接口

所有post接口都为payload模式，参数构建为请求body中的json字符串，后台需解析后使用

### 首页轮播图列表

Desc:
全部8个位置都要返回，没有设置的url为空

Method：
GET

Request Params:
none

Response:

    {
        "status" : 1,
        "data" : [
            {
                "id" : 1,
                "url" :"http://img6.douban.com/icon/u63439633-339.jpg"
            },
            ...
        ]
    } 

### 首页轮播图设置

Method：
POST

Request Params:

    {"id" : 1, "url" : "http://xxx/x.jpg"}

Response:

    {
        "status" : 1,
        "msg" :  "错误信息"
    }

### 获取咨询列表

Method：
GET

Request Params:
{"type" : 1}

Response:

    {
        "status" : 1,
        "data" : [
            {
                "id" : 1,
                "url" :"http://img6.douban.com/icon/u63439633-339.jpg",
                "type" : "1", 
                "title":"123",
                "desc":"home.json",
                "created_date":"2014-10-22"
            }
            ...
        ]
    }


### 获取咨询详情

Method：
GET

Request Params:
{"id" : 1}

Response:

    {
        "status" : 1,
        "data" : [
            {
                "id" : 1,
                "url" :"http://img6.douban.com/icon/u63439633-339.jpg",
                "type" : "1", 
                "title":"123",
                "desc":"home.json",
                "created_date":"2014-10-22",
                "body" : "dsfdasfjdsal"
            }
            ...
        ]
    }

### 咨询添加、修改

Desc:
id为空是添加，id不为空是修改

Method：
POST

Request Params:

    {
        "url":"http://xxx/x.jpg", //咨询封面图url
        "id" : 1, 
        "title" : "标题",
        "type" : 1, //所属栏目：1 食 2游 3物
        "desc" : "描述",
        "body" : "内容"
    }

Response:

    {
        "status" : 1,
        "msg" : "错误信息"
    }

### 咨询删除

Method：
POST

Request Params:

    {"id":1}

Response:

    {
        "status" : 1,
        "msg" : "错误信息"
    }


### 获取物品列表

Method：
GET

Request Params:
{"type" : 1}

Response:

    {
        "status" : 1,
        "data" : [
            {
                "id" : 1,
                "url" :"http://img6.douban.com/icon/u63439633-339.jpg",
                "type" : 1,
                "title":"123",
                "desc":"home.json",
                "created_date":"2014-10-22"
            },
            ...
        ]
    }

### 物品添加、修改

Desc:
id为空是添加，id不为空是修改

Method：
POST

Request Params:

    {
        "url":"http://xxx/x.jpg", //物品封面图url
        "id" : 1, 
        "title" : "标题",
        "type" : 1, //所属栏目：1 食 2游 3物
        "desc" : "描述"
    }

Response:

    {
        "status" : 1,
        "msg" : "错误信息"
    }

### 物品删除

Method：
POST

Request Params:

    {"id":1}

Response:

    {
        "status" : 1,
        "msg" : "错误信息"
    }

### 更改账户密码

Method：
POST

Request Params:

    {
      "oldPasswd" : "2",
      "newPasswd" : "3",
      "confirmPasswd" : "3"
    }

Response:

    {
        "status" : 1,
        "msg" : "错误信息"
    }


### 房间预订查询

Method：
GET

Request Params:

    {
      "from" : "2015-02-22",
      "to" : "2015-02-23"
    }

Response:

    {
        "status" : 1,
        "data" : {
            "list" : [
                {
                  "id" : 1,
                  "title" : "201标准大床房",
                  "desc" : "双早",
                  "img" : "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2319958607,781619405&fm=80",
                  "isDisabled" : false, //是否可预订
                  "url" : "http://www.baidu.com/",
                  "price" : "880"
                },
                {
                  "id" : 1,
                  "title" : "201标准大床房",
                  "desc" : "双早",
                  "img" : "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2319958607,781619405&fm=80",
                  "isDisabled" : true,
                  "url" : "http://www.baidu.com/",
                  "price" : "880"
                }
          ]
      }
    }


### 获取房间图片列表

Method：
GET

Request Params:

    {"id" : 1} //[1-15]15栋建筑的id

Response:

    {
      "status" : 1,
      "data" : {
        "list" : [
          {
            "id" : 1,
            "name" : "101大床房",
            "img" : [
              {"url" : "/images/tmp/live.jpg"},
              {"url" : "/images/tmp/live.jpg"},
              {"url" : "/images/tmp/live.jpg"},
              {"url" : "/images/tmp/live.jpg"}
            ]
          },
          {
            "id" : 2,
            "name" : "201大床房",
            "img" : [
              {"url" : "/images/tmp/live.jpg"},
              {"url" : "/images/tmp/live.jpg"}
            ]
          }
        ]
      }
    }

### 增加修改房间

Desc：
有id是修改，id空是新增

Method：
POST

Request Params:

    {
        "id" : 1，
        "name" : "房间名称",
        "bid" : 2, //[1-15]15栋建筑的id
        "img" : ["http://xxx.jpg","http://aaa/a.png"]
    } 

Response:

    {
        "status" : 1,
        "msg" : "错误信息"
    } 

### 删除房间

Method：
POST

Request Params:

    {"id":1}

Response:

    {
        "status" : 1,
        "msg" : "错误信息"
    }
