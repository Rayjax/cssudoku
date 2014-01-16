var mongoose = require('mongoose');

var userSchema=mongoose.Schema({
    name : {
    	type : String,
    	required : true
    },
    encryptedPassword : {
    	type: String,
    	required : true
    }
})

var User=mongoose.model('User',userSchema);
module.exports = {User : User, userSchema : userSchema}