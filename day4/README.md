# Angularjs 学习
>第四天 2017年7月11日

 - Angularjs的bootstrap,include,animate,DI,路由

## 相关知识

### 1.include
```
<div ng-include="test.html"></div>
```

### 2.animate
1)引入`ngAnimate`
```
var app = angular.module('myApp', ['ngAnimate']);
```

2)AngularJS添加/移除class的指令：

 - ng-show
 - ng-hide
 - ng-class
 - ng-view
 - ng-include 
 - ng-repeat
 - ng-if
 - ng-switch

>`ng-show`和`ng-hide`用于添加或移除`ng-hide` class的值
其他指令会在进入DOM后添加`ng-enter`class,移除DOM会添加`ng-leave`属性。
当HTML元素位置改变时，`ng-repeat`指令同样可以添加`ng-move` class。

### 3.DI
>依赖注入模式下，一个或更多的依赖被注入到一个独立的对象中，然后成为该客户端状态的一部分。

AngularJS使用以下五个组件实现依赖注入：

 - value 一个简单的js对象，用于向控制器传递值（配置阶段）
 - factory 一个函数用于返回值。在service和controller需要时创建。通常使用它来计算或返回值。
 - provider 通过它创建一个service、factory等（配置阶段），它提供了一个factory方法get(),用于返回value/service/factory
 - service 服务
 - constant 常量，用来在配置阶段传递数值，这个常量在配置阶段是不可用的


### 4.route
1)angularjs1.6 的route不起作用
例如
```
<a href="#/first">first</a>

$routeProvider.when('/first', {template:"first page"});
```
会发现浏览器上的路径多了`%2F`.

解决方法：https://stackoverflow.com/questions/41211875/angularjs-1-6-0-latest-now-routes-not-working#

改后代码
```
<a href="#!/first">first</a>
```

2)ng-view指令
该指令下的页面会实时根据路由的变化而变化

3)$routerProvider提供了`when(path, object)`和`otherwise(object)`函数
使用这些函数来按顺序定义所有路由，函数包含两个参数

 - 第一个参数是URL或者URL正则规则
 - 第二个参数是路由配置对象

4)路由配置对象

 - template: string 普通html
 - templateUrl: string html页面路径
 - controller: string, function or array 当前模板上执行的controller函数， 生成新的scope
 - controllerAs: string 为controller指定别名
 - redirectTo string, function 重定向的地址
 - resolve: object<key, function> 指定当前controller所依赖的其他模块