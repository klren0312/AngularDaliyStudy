//乘法
var mult = function() {
    var a = 1
    for (var i = 0, ilen = arguments.length; i < ilen; i += 1) {
        a = a * arguments[i]
    }
    return a
}

//计算加法
var plus = function() {
    var a = 0
    for (var i = 0, ilen = arguments.length; i < ilen; i += 1) {
        a += arguments[i]
    }
    return a
}

//代理函数
var proxyFunc = function(fn) {
    var cache = {};
    return function() {
        var args = Array.prototype.join.call(arguments, ',')
        if (args in cache) {
            return cache[args]
        }
        return cache[args] = fn.apply(this, arguments)
    }
}
var proxyMult = proxyFunc(mult)
console.log(proxyMult(1, 2, 3, 4))
console.log(proxyMult(1, 2, 3, 4))

var proxyPlus = proxyFunc(plus)
console.log(proxyPlus(1, 2, 3, 4))
console.log(proxyPlus(1, 2, 3, 4))