var http = require('http');
http.createServer(function (req, res) {
	console.log("Server started...", req.url);
  	res.writeHead(200, {'Content-Type': 'text/plain'});
  	res.end('This is a little server!\n');
}).listen(3000);