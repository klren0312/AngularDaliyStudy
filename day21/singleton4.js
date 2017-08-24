//单体模式弹窗
var createWindow = (function() {
    var div
    return function() {
        if (!div) {
            div = document.createElement("div")
            div.innerHTML = "我是弹窗内容"
            div.style.display = 'none'
            document.body.appendChild(div)
            console.log("num")
        }
        return div
    }
})()
document.getElementById("Id").onclick = function() {
    var win = createWindow()
    win.style.display = "block"
}