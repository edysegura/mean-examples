var http = require('http');

var server = http.createServer(function (request, response) {
	console.log("Request for: ", request.url);
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.end('This is a little server!\n');
});

function onStart() { console.log('Server started at http://localhost:3000') }
server.listen(3000, onStart);