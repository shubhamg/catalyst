module.exports = function(app, passport) {
	app.get('/', function(req, rep){
		res.render('index.ejs');
	});

	app.get('/login', function(req, rep){
		res.render('login.ejs', {message: req.flash('loginMessage')});
	});

	app.post('/login', function(req, rep){
		// res.render('login.ejs', {message: req.flash('loginMessage')});
	});

	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile.ejs', {
			user: req.user
		});
	});
};

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated()) {
		return next();
	}
	res.redirect('/');
}