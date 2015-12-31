var http = require("http");
var request = require("request");

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Welcome to Muesli!");
	response.end();
}).listen(8080);
