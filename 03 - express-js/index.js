var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res) {
	//res.send('Hey there!');
	res.redirect('/index.html');
});

app.get("/edysegura", function(req, res) {
	res.send('Hey there Edy Segura!');
});

var server = app.listen(3000, function() {
	console.log("Server started... http://localhost:3000");
});