/**
 * 代理模式
 * 代理对象可以代替本体被实例化，并使其可以被远程访问
 */
//申请一个对象
var TeaAndMilkGirl = function(name) {
    this.name = name
}

var ceo = function(girl) {
    this.girl = girl
        //送礼物
    this.sendMarriageRing = function(ring) {
        console.log("Hi " + this.girl.name + ", ceo带你一个礼物： " + ring)
    }
}

var ProxyObj = function(girl) {
    this.girl = girl;
    //经纪人代理送礼物
    this.sendGift = function(gift) {
        //代理 模式负责本体对象实例化
        (new ceo(this.girl)).sendMarriageRing(gift);
    }
}

//初始化
var proxy = new ProxyObj(new TeaAndMilkGirl("Milkgril"))
proxy.sendGift("ring")