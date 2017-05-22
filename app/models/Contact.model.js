var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	picture: String,
	occupation: String,
	employer: String,
	phone: String,
	email: String,
	notes: String
});

module.exports = mongoose.model('Contact', ContactSchema);
