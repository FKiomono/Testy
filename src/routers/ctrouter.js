// router.js

var express = require('express');
var router = express.Router();
//const { index, login, logout, register } = require('../controllers/authController.js');
var auth_controller = require('../controllers/authController.js');
var profile_controller = require('../controllers/profileController.js');

// index page 
router.get('/', function(req, res) {
    res.render('pages/index');
});

// logIn page 
router.get('/login', auth_controller.index) ;

// logOut page 
router.get('/logout', auth_controller.logout) ;

// auth page 
router.post('/auth', auth_controller.auth );

// profil page 
router.get('/profile/$1', profile_controller.index );
/*
router.get('/profile/$1', function(req, res) {
    let id = req.params.id;
	if (req.session.loggedin) {
        res.render('pages/profile')
		//response.send('Welcome back, ' + request.session.username + '!');
	} else {
		res.send('Please login to view this page!');
	}
	res.end();
});
*/

module.exports = router;