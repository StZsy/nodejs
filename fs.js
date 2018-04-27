var fs = require("fs");

var data = fs.readFileSync('input.txt');

//非阻塞
fs.readFile('input.txt',function(err,data){
	if (err) return console.log(err);
	console.log(data.toString());
});

console.log('end');