var 
	q = require('q'),
	User = require('../model/user.js');

function getUsers() {
	var deferred = q.defer();
	User.find({}, function(err, users) {
		deferred.resolve(users);
	});
	return deferred.promise;
};

function insertUser(user) {
	var deferred = q.defer();
	var userDB = new User(user);
	userDB.save(function(err){
		deferred.resolve(userDB);
	});
	return deferred.promise;
};

module.exports = function(app) {
	app.get('/api/users', function(req, res) {
		getUsers().then(function(users) {
			res.send(users);
		});
	});

	app.post('/api/users', function(req, res) {
		var user = {
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		};
		insertUser(user).then(function(user) {
			res.send(user);
		});
	});
};
