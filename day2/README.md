# Angularjs 学习
>第二天 2017年7月9日

 - Angularjs的service

## 相关服务

 - $location 解析再浏览器地址栏中的URL，改变地址栏中的URL会作用到$location服务，反之同样。
 - $http 进行相关http请求操作
 - $timeout 延时操作
 - $Interval 延时循环
 - 自定义服务 

## 记录

### 自定义服务
```
app.service('服务名', function(){
    this.方法名 = function(参数){
        return xxx
    }
});
//控制器中使用
app.controller('控制器名', function(服务名,...){
    服务名.方法名(参数);
})
//过滤器中使用
app.filter(’过滤器名', ['服务名', function('服务名'){
    return function(参数){
        return 服务名.方法名(参数);
    }
}])
```
