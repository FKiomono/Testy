//profileController.js

const {connection} = require('../config/config');
//var profile = require('../models/profileModel.js');

exports.index = function(req, res) {
	let id = req.params.id;
    if (id) {
		connection.query('SELECT * FROM users WHERE id = $1', [id], function(error, results, fields) {
			if (results.rows.length > 0) {
                //response.render('pages/profile')
				res.render('pages/profile', {index: results.rows});
			} else {
				res.send('Coś nie bangla');
			}			
			res.end();
		});
	} else {
		res.send('Coś mocno nie bangla');
		res.end();
	}
};
