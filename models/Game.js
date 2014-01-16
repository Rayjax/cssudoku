var mongoose = require('mongoose');
var schema = mongoose.Schema
var grid = require('./Grid');

var gameSchema=mongoose.Schema({
    userId: {
    	type : schema.Types.ObjectId,
    	ref: '_id',
    	required : true
    },
    start : {
    	type: Date,
    	required : true
    },
    grid : {
    	type : [Number],
    	required : false
    },
    initialGrid : {
    	type : [Number],
    	required : false
    }
})

var Game=mongoose.model('Game',gameSchema);

gameSchema.statics.generateNew = function(userId, cb){
	//Generate grid
	var myGrid = new Array(1, 2, 3, 4, 5, 0, 7, 8, 9, 5, 6, 7, 8, 9, 1, 2, 3, 4, 9, 1, 2, 3, 4, 0, 6, 7, 8, 4, 5, 6, 7, 8, 9, 1, 0, 3, 8, 9, 1, 2, 0, 4, 5, 6, 7, 3, 4, 5, 6, 7, 8, 9, 1, 2, 7, 8, 9, 1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 7, 8, 9, 1, 6, 7, 8, 9, 1, 2, 3, 4, 5)
	var game = new this.model("Game");
	game.userId = userId;
	game.start = new Date();
	//game.grid = myGrid
	//Create game
	//var game = {userId : userId, start: new Date(), grid : [myGrid], initialGrid : [myGrid] }
    //this.create(game, function(err, game){
    game.save(function(err, game){
    	if(err) return cb(err);
    	cb(null, game);
    })
}

gameSchema.methods.get = function(x, y) {
	return this.grid[9*y + x];
}

gameSchema.methods.set = function(x, y, value) {
	this.grid[9*y + x] = value
}



module.exports = {Game : Game, gameSchema : gameSchema}