module.exports = function(app) {
	// INDEX PAGE ============================================================
	app.get('/', function(req, res) {
		res.render('index.ejs');
	});
};
