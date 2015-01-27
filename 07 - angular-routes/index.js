var 
	express = require('express'),
	app = express();

var 
	configDB = require('./config/database'),
	mongoose = require('mongoose');

mongoose.connect(configDB.url);

app.get("/", function(req, res) {
	res.redirect('/index.html');
});

var bodyParse = require('body-parser');
app.use(bodyParse.json());
app.use(express.static('public'));

require('./controller/user')(app);

var server = app.listen(3000, function() {
	console.log("Server started...");
});

var io = require('socket.io').listen(server);
io.on('connection', function(client) {
	console.log('New user connected: ' + client.id);
});

function send() {
	io.emit('myEventName', new Date());
	setTimeout(send, 1000);
}
send();
