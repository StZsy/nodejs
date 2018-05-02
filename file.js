var fs = require("fs")

//异步读取
fs.readFile('input.txt', function(err, data){
	if (err) {
		return console.error(err);
	}
	console.log("1.异步读取：" + data.toString());
});

//同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取：" + data.toString());

console.log('end');

//异步打开文件
console.log('2.准备打开文件');
fs.open('input.txt','r+',function(err, fd){
	if (err){
		return cosole.error(err);
	}
	console.log('2.文件打开成功');
});

//获取文件信息
//fs.stat(path, callback);
fs.stat('input.txt',function(err,stats){
	console.log(stats);
	console.log(stats.isFile());
	console.log(stats.isDirectory());
});
//stats --isFile,isDirectory,isBlockDevice...etc

//写文件
console.log("3.准备写入文件");
fs.writeFile('out.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("3.数据写入成功！");
   console.log("3.--------我是分割线-------------")
   console.log("3.读取写入的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("3.异步读取文件数据: " + data.toString());
   });
});
//追加写 (a+)
fs.open('out.txt', "a+", function(err, fd){
    if (err) {
        return console.error(err);
    }
    fs.writeFile(fd, "bb", function(err){
        if (err){
            return console.error(err);
        }
    });
});

//读取文件
var buf = new Buffer(1024);

console.log("4.准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("4.文件打开成功！");
   console.log("4.准备读取文件：");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log("4." + bytes + "  字节被读取");
      
      // 仅输出读取的字节
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});

//异步模式下关闭文件
//fs.close(fd, callback)

//截取文件
//fs.ftruncate(fd, len, callback)

//删除文件
//fs.unlink(path, callback)

//创建目录
//fs.mkdir(path[, mode], callback)
//mode - 设置目录权限，默认为 0777

//读取目录
//fs.readdir(path, callback)

//删除目录
//fs.rmdir(path, callback)

//..........
