Game = require('./models/Game')

//Respond with error if something is wrong
function apiRequestError(res, err) {
    res.send(err);
}

module.exports = function (app) {

    app.post('/games', function (req, res){
    	Game.Game.generateNew(req.session.user._id, function(err, game){
    		console.log(err)
    		if(err) return apiRequestError(res, err)
    		res.redirect('/games/' + game._id)
    	})
    });

    app.get('/games', function(req, res){
        Game.Game.find({userId : req.session.user._id}, function(err, games){
        	if(err)	return apiRequestError(res, err);
        	res.render("games_index.ejs", {games : games})
        })
    });
}