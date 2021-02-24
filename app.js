
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var onboarding = require('./routes/onboarding');
var signIn = require('./routes/signIn');
var signUp = require('./routes/signUp');
var home = require('./routes/home');
var habit = require('./routes/habit');
var habitDetails = require('./routes/habitDetails');
var createHabit = require('./routes/createHabit');
var setting = require('./routes/setting');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', onboarding.view);
app.get('/signIn', signIn.view);
app.get('/signUp', signUp.view);
app.get('/habit', habit.view);
app.get('/createHabit', createHabit.view);
app.get('/createHabit/success', createHabit.create)
app.get('/habitDetails', habitDetails.view);
app.get('/home', home.view);
app.get('/setting', setting.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
