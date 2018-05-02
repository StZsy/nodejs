function say(world){
	cosole.log(world);
}

function exexute(someFunction, value) {
	someFunction(value);
}

execute(say, "Hello");

/** http实现 */
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);
/** 等于 */
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
/** END */