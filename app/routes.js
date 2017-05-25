var Contact = require('./models/Contact.model');

module.exports = function(app) {
	// INDEX PAGE ============================================================
	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	// CONTACTS PAGE =========================================================
	// Get all contacts in json
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

	// Get the html contacts page
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

	// CONTACT (individual) PAGE =============================================
	// Get the contact in JSON
	app.get('/contact-api/:id', function(req, res) {
		Contact.findOne({ _id : req.params.id })
		.exec()
		.then(function(contact) {
			res.json(contact);
		})
		.catch(function(err) {
			res.status(500).send({ error: 'Error occured' });
		});
	});
	// Get the html contact page
	app.get('/contact/:id', function(req, res) {
		Contact.findOne({ _id : req.params.id })
		.exec()
		.then(function(contact) {
			res.render('contact', {
				contact: contact
			});
		})
		.catch(function(err) {
			res.status(500).send({ error: 'Error occured' });
		});
	});
};
