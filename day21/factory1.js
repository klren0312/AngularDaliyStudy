/*工厂模式
*解决多个类似对象声明的问题，解决实例化对象产生重复的问题
*/
function CreatePerson(name, age, sex) {
	var obj = new Object()
	obj.name = name
	obj.age  = age
	obj.sex  = sex
	obj.sayName = function(){
		return this.name
	} 
	return obj
}

var p1 = new CreatePerson("longen", '28', '男')
var p2 = new CreatePerson("tugenhua", '27', '女')
console.log(p1.name)
console.log(p1.age)
console.log(p1.sex)
console.log(p1.sayName())

console.log(p2.name)
console.log(p2.age)
console.log(p2.sex)
console.log(p2.sayName())

console.log(typeof p1)
console.log(typeof p2)
console.log(p1 instanceof Object)