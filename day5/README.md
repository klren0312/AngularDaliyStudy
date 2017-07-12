# Angularjs 学习
>第五天 2017年7月12日

 - Angularjs的两个应用


## 1.第一个应用：记事本
使用相关知识点：

 - 数据双向绑定

## 2.第二个应用：todo
使用相关知识点：

 - 数据双向绑定
 - ng-repeat
 - js数组的操作。push向数组中增加数据
 - angular.forEach()
 - 删除todo项的逻辑

### 1) angular.forEach
```
angular.forEach(objs, function(data,index,array){
})
```

 - objs:需要遍历的集合
 - data:遍历时当前的数据
 - index:遍历时当前的索引（可不写）
 - array：需要遍历的集合，每次遍历都会把objs原样传一次（可不写）

### 2）删除todu项的逻辑
每个todu项前面会有个checkbox，当选上后，会将数组中的select项置为true，当点击按钮删除选择项时，
先将数组置空，重新将select为false的todo项，push到数组。