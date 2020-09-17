//authController.js

const {connection} = require('../config/config');

exports.index = function(req, res) {
    res.render('pages/login');
};

exports.auth = function(req, res) {
    var username = req.body.userName;
	var password = req.body.userPassword;
	if (username && password) {
		connection.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password], function(error, results, fields) {
			if (results.rows.length > 0) {
				req.session.loggedin = true;
                req.session.username = username;
                var id = results.id;
                //response.render('pages/profile')
				res.redirect('/profile/:id');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
};

exports.logout = function(req, res) {
    req.session.loggedin = false;
    req.session.username = null;
    res.redirect('/');
};

exports.register = function(req, res) {
    res.render('pages/register');
};