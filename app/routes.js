module.exports = function(app, passport) {
	app.get('/', function(req, res){
		res.render('index.jade');
	});

	app.get('/login', function(req, res){
		res.render('login.jade', {message: req.flash('loginMessage')});
	});

	app.post('/login', function(req, res){
		// res.render('login.jade', {message: req.flash('loginMessage')});
	});

	app.get('/profile', isLoggedIn, function(req, res){
		res.render('profile.jade', {
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