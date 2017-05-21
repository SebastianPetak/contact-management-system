var Contact = require('./models/Contact.model');

module.exports = function(app) {
	// INDEX PAGE ============================================================
	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	// CONTACTS PAGE =========================================================
	// get all contacts in json
	app.get('/contacts-api', function(req,res) {
		Contact.find({})
		.exec()
		.then(function(contacts) {
			res.json(contacts);
		})
		.catch(function(err) {
			res.status(500).send({ error: 'Error occured' });
		});
	});

	// get the html contact page
	app.get('/contacts', function(req,res) {
		Contact.find({})
		.exec()
		.then(function(contacts) {
			res.render('contacts', {
				contacts: contacts
			});
		})
		.catch(function(err) {
			res.status(500).send({ error: 'Error occured' });
		});
	});
};
