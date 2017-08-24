var CreateDiv = function(html) {
    this.html = html
    this.init()
}

CreateDiv.prototype.init = function() {
    var div = document.createElement("div")
    div.innerHTML = this.html
    document.body.appendChild(div)
}

var ProxyMode = (function() {
    var instance;
    return function(html) {
        if (!instance) {
            instance = new CreateDiv("I TEST IT")
        }
        return instance
    }
})()

var a = new ProxyMode("aaa")
var b = new ProxyMode("bbb")
cnosole.log(a === b)