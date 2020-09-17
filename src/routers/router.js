// router.js

var express = require('express');
var router = express.Router();
const {connection} = require('../config/config');

// index page 
router.get('/', function(req, res) {
    res.render('pages/index');
});

// logIn page 
router.get('/login', function(req, res) {
    res.render('pages/login');
});

// logOut page 
router.get('/logout', function(req, res) {
	req.session.loggedin = false;
    req.session.username = null;
    res.redirect('/');
});

// about page 
router.get('/about', function(req, res) {
    res.render('pages/about');
});

// auth page 
router.post('/auth', function(req, res) {
	var username = req.body.userName;
	var password = req.body.userPassword;
	if (username && password) {
		connection.query('SELECT * FROM users WHERE username = $1 AND password = $2', [username, password], function(error, results, fields) {
			if (results.rows.length > 0) {
				req.session.loggedin = true;
                req.session.username = username;
                //response.render('pages/profile')
				res.redirect('/profile');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

router.get('/profile', function(req, res) {
	if (req.session.loggedin) {
        res.render('pages/profile')
		//response.send('Welcome back, ' + request.session.username + '!');
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
});

module.exports = router;