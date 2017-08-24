/**
 * 模板模式
 * 必须要创建一个对象，并以某些数据进行初始化，同时还要公开一些能够访问这些私有数据的方法时
 */
var singleMode = (function() {
    //创建私有变量
    var privateNum = 112
        //创建私有函数
    function privateFunc() {
        //实现自己的业务逻辑代码
    }
    //返回一个对象包含公有方法和属性
    return {
        publicMethod1: publicMethod1,
        publicMethod2: publicMethod1
    }
})()

console.log(singleMode())