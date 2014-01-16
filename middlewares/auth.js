var mongoose = require('mongoose');
var User = require('../models/User');

module.exports = function(req, res, next) {
	
	if(req.session.user != null){
		//user is connected
		next();
	} else {
		// retrieve first user in DB
		User.User.findOne({},function (err, user){
			if(err) return next(err)
			if(user == null) {
			 	User.User.create({name : "demo", encryptedPassword : "demo"}, function(err, user){
			 		if(err) return next(err)
			 		req.session.user = user
			 		console.log("logged as ", user.name)
			 		next()
				})
			} else {
				req.session.user = user
				console.log("logged as ", user.name)
				next()
			}
		})
	}
}