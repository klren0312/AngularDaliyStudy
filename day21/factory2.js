var BicycleShop = function(name) {
	this.name = name
	this.method = function(){
		return this.name
	}
}

BicycleShop.prototype = {
	constructor: BicycleShop,
	/*
	*买自行车
	*/
	sellBicycle: function(model){
		var bicycle = this.createBicycle(model)
		//执行A业务逻辑
		bicycle.A()
		//执行B业务逻辑
		bicycle.B()
		return bicycle
	},
	createBicycle: function(model){
		throw new Error("父类是抽象类，不能调用")
	}
}

//实现原型继承
function extend(Sub,Sup){
	//Sub表示子类，Sup表示超类
	//首先定义一个空函数
	var F = function(){}

	//设置空函数的原型为超类的原型
	F.prototype = Sup.prototype;

	//实例化空函数，并把超类原型引用传递给子类
	Sub.prototype = new F();

	//重置子类中保存的超类的原型，避免子类与超类的耦合
	Sub.sup = Sup.prototype;

	if(Sup.prototype.constructor === Object.prototype.constructor) {
		//检测超类原型的构造器是否为原型自身
		Sup.prototype.constructor = Sup;
	}
}

var BicycleChild = function(name){
	this.name = name;
	BicycleShop.call(this, name);
};

extend(BicycleChild, BicycleShop);
