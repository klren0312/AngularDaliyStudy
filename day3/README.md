# Angularjs 学习
>第三天 2017年7月10日

 - Angularjs的http，select

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

#### 1.当数据为数组格式时
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

#### 2.当数据为数组对象时
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

#### 3.当数据为数据对象时
>```{site01: "Google", site02: "Runoob", site03: "Taobao" }```

使用ng-option
```
<select ng-model="selectName" ng-option="x for (x,y) in sites"></select>
```