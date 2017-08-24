/**
 * 单例模式
 * 可以被实例化，且实例化一次
 */
var Singleton = function(name) {
    this.name = name;
    this.instance = null;
};

Singleton.prototype.getName = function() {
    return this.name
}

//获取实例对象
function getInstance(name) {
    if (!this.instance) {
        this.instance = new Singleton(name)
    }
    return this.instance
}

var a = getInstance("aa")
var b = getInstance("bb")

console.log(a === b)
console.log(a.getName())
console.log(b.getName())