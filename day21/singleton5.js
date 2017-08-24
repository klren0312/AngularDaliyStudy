//创建div
var createWindow = function() {
    var div = document.createElement("div")
    div.innerHTML = "我是弹窗内容"
    div.style.display = 'none'
    document.body.appendChild(div)
    return div
}

//创建iframe
var createIframe = function() {
    var iframe = document.createElement("iframe")
    document.body.appendChild(iframe)
    return iframe
}

//获取实例封装代码
var getInstance = function(fn) {
    var result
    return function() {
        return result || (result = fn.call(this, arguments))
    }
}


//测试div
var createSingleDiv = getInstance(createWindow)
document.getElementById("Id").onclick = function() {
    var win = createSingleDiv
    win.style.display = "block"
}

//测试iframe
var createSingleIframe = getInstance(createIframe)
document.getElementById("Id").onclick = function() {
    var win = createSingleIframe()
    win.src = "http://www.baidu.com"
}