var mongoose = require('mongoose');

var gridSchema=mongoose.Schema({
    cells: {
    	type : [Number],
    	required : true
    }
})
var Grid=mongoose.model('Grid',gridSchema);


gridSchema.methods.get = function(x, y) {
	return this.cells[9*y + x];
}

gridSchema.methods.set = function(x, y, value) {
	this.cells[9*y + x] = value
}

gridSchema.statics.generate = function() {

}

module.exports = {gridSchema : gridSchema, Grid : Grid};