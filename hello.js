function Hello() {
	var name;
	this.setName = function(thyName){
		name = thyName;
	};
	this.sayHello = function() {
		console.log('Hello ' + name);
	};
};
//外部引用该模块，接口对象是Hello本身
module.exports = Hello;

//没有module.exports则返回exports内容
exports.hello = function(){
	console.log('Hello World!');
}