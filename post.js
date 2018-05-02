var http = require('http');
var querystring = require('querystring');

var postHTML = 
	'<form method="post">' +
	'网站名： <input name = "name"><br>' +
	'url： <input name = "url"><br>' +
	'<input type = "submit">' +
	'</form>';
	
http.createServer(function(req, res) {
	// 定义了一个body变量，用于暂存请求体的信息
	var body = "";
	
	// 通过req的data事件监听函数，每当接受到请求体的数据，就累加到body变量中
	req.on('data', function (chunk) {
		body += chunk;
	});
	// 在end事件触发后，通过querystring.parse将data解析为真正的POST请求格式，然后向客户端返回。
	req.on('end', function(){
		body = querystring.parse(body);
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
		
		if(body.name && body.url) {
			res.write("网站名：" + body.name);
			res.write('<br>');
			res.write('网站url：' + body.url);
		}else{
			res.write(postHTML);
		}
		res.end();//必要的退出 但会再次出发end事件?
	});
}).listen(2333);