# Angularjs 学习
>第三天 2017年7月10日

 - Angularjs的http，select，table，HTML DOM，表单，api

## 相关知识

### 1.http请求代码结构
>菜鸟教程提供的是angular1.4
```
    废弃声明 (v1.5)
    v1.5 中$http 的 success 和 error 方法已废弃。使用 then 方法替代。
```

```
//angular1.5以下的写法
$http.get("请求的接口")
    .success(function(response){
        //请求成功的处理函数
        $scope.names = response.sites;
    });
```

```
//angular1.5以上的写法
$http.get("请求的接口")
    .then(function(response){
        $scope.names = response.data.sites;
    })
```

### 2.select相关
>两种形式 一种是使用`ng-option` ,一种是使用`ng-repeat`

#### 1)当数据为数组格式时
>```["Google", "Runoob", "Taobao"];```

使用ng-option
```
<select ng-model="selectName" ng-option="x for x in names"></select>
```
使用ng-repeat
```
<select>
    <option ng-model="selectName" ng-repeat="x in names" >{{x}}</option>
</select>
```

#### 2)当数据为数组对象时
> ```[{ site: "Google", url: "http://www.google.com" }, {site: "Runoob",url: "http://www.runoob.com" }, {site: "Taobao", url:http://www.taobao.com"}]```

使用ng-option
```
<select ng-model="selectName" ng-option="x.site for x in sites"></select>
```
使用ng-repeat
```
<select>
    <option ng-repeat="x in sites" value="x.url">{{x.site}}</option>
</select>
```

#### 3)当数据为数据对象时
>```{site01: "Google", site02: "Runoob", site03: "Taobao" }```

使用ng-option
```
<select ng-model="selectName" ng-option="x for (x,y) in sites"></select>
```

### 3.table相关

 1.$odd 奇数行，$even 偶数行
 2.css样式`{{$even?'background-color:#f1f1f1':'#fff'}}`


### 4.HTML DOM

 1.ng-disabled 直接绑定应用程序数据到html的disabled属性
 2.ng-show 指定显示或者隐藏html元素，可以通过`true`&`false`来控制，也可以通过表达式来计算布尔值
 3.ng-hide 指定隐藏或者显示html元素，具体同上`ng-show`


### 5.表单

1.ng-switch ng-switch-when 选择语句
```
<div ng-switch="myChoose">
    <div ng-swithc-when="a">a</div>
    <div ng-swithc-when="b">b</div>
    <div ng-swithc-when="c">c</div>
</div>
```

2.表单属性

 - $dirty 表单有填写记录
 - $valid 字段内容是合法的
 - $invalid 字段内容是非法的
 - $pristine 表单没有填写记录