var fs = require('fs');
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

//处理流事件 --> data.end.and error
readerStream.on('data' ,function(chunk) {
	data += chunk;
});

readerStream.on('end',function(){
	console.log(data);
});

readerStream.on('error' , function(err){
	console.log(err.stack);
});

console.log('程序设计完毕');

var data1 = '写入数据';

//创建一个可以写入的流，写入到文件 output.txt中
var writerStream = fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writerStream.write(data1,'UTF8');

//处理流事件 --> data1,end,and error
writerStream.end();

writerStream.on('finish',function() {
	console.log("写入完成");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});

console.log('end');


//管道pipe
var pipeReaderStream = fs.createReadStream('input.txt');
var pipeWriterStream = fs.createWriteStream('output.txt');

//管道写操作
//读取input.txt 文件内容，并将内容写入到output.txt 文件中
pipeReaderStream.pipe(pipeWriterStream);

console.log('pipeend');

var zlib = require('zlib');

//压缩 input.txt 文件为input.txt.gz 
fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));
	
console.log('文件压缩完成');

//解压 input.txt.gz 文件为 input.txt
//fs.createReadStream('input.txt.gz')
	//.pipe(zlib.createGunzip())
	//.pipe(fs.createWriteStream('input1.txt'));
	
//console.log('文件解压完成');