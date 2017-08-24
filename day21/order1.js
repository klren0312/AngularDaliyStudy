/**
 * 责任链模式
 * 处理请求组成的一条链，请求在这些对象之间依次传递，直到遇到一个可以处理它的对象
 */
function order500(orderType, isPay, count) {
    if (orderType == 1 && isPay == true) {
        console.log("亲爱的用户，您中了100")
    } else {
        return "nextSuccessor"
    }
}

function order200(orderType, isPay, count) {
    if (orderType == 1 && isPay == true) {
        console.log("亲爱的用户，您中了20")
    } else {
        return "nextSuccessor"
    }
}

function orderNormal(orderType, isPay, count) {
    //普通用户来处理中奖信息
    if (count > 0) {
        console.log("亲爱的用户您已抽到10元优惠券")
    } else {
        console.log("亲爱的用户，再接再厉哦")
    }
}

var Chain = function(fn) {
    this.fn = fn
    this.successor = null
}
Chain.prototype.setNextSuccessor = function(successor) {
        return this.successor = successor
    }
    //把请求往下传递
Chain.prototype.passRequest = function() {
    var ret = this.fn.apply(this, arguments)
    if (ret === 'nextSuccessor') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments)
    }
    return ret
}

var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNomal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, true, 500)
chainOrder500.passRequest(1, false, 0)