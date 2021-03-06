var express = require('express');
var app = express();
var port = 3000;

var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');
mongoose.connect(configDB.url);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'jade');

app.use(session({ secret: 'shubyshubyshuby'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(express.static(__dirname + '/public'));

require('./app/routes.js')(app, passport);

app.listen(port);
console.log('The magic happens on port' + port);