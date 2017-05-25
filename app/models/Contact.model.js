var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
	userId: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true,
		trim: true
	},
	lastName: {
		type: String,
		required: true,
		trim: true
	},
	picture: String,
	occupation: {
		type: String,
		trim: true
	},
	employer: {
		type: String,
		trim: true
	},
	phone: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	notes: {
		type: String,
		trim: true
	}
});

module.exports = mongoose.model('Contact', ContactSchema);
