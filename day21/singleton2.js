var Singleton = function(name) {
    this.name = name
}

Singleton.prototype.getName = function() {
    return this.name;
}

var getInstance = (function() {
    var instance = null
    return function(name) {
        if (!instance) {
            instance = new Singleton(name)
        }
        return instance
    }
})()

var a = getInstance("aa")
var b = getInstance("bb")