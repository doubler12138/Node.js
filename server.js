var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {"Content-type": "text/html"});
	res.write("<h1>Node.js</h1>");
	res.end("<p>Hello World");
}).listen(3000);
console.log("HTTP server is listening at port 6000.");