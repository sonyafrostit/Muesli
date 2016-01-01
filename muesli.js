var http = require("http");
var request = require("request");
var fs = require("fs");

var apiData;

function loadData() {
    fs.readFile( __dirname + "apidata.json", function (err, data) {
        if (err) {
            throw err;
        } 
        apiData = JSON.parse(data);
    });
}


http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Welcome to Muesli!");
    response.end();
}).listen(8080);
