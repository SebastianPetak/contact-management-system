var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	name: String,
	occupation: String,
	employer: String,
	phone: String,
	email: String,
	notes: String
});

module.exports = mongoose.model('Contact', ContactSchema);
