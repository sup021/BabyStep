
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
var habit = require('./routes/habit');
var editHabit = require('./routes/editHabit');
var createHabit = require('./routes/createHabit');
var setting = require('./routes/setting');
var help = require('./routes/help');
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
app.get('/habit/delete/:index', habit.delete);
app.get('/createHabit', createHabit.view);
app.get('/createHabit/success', createHabit.create)
app.get('/editHabit/:index', editHabit.view);
app.get('/editHabit/:index/success', editHabit.save);
app.get('/editHabit/JSON/:index', editHabit.postJSON);
app.get('/setting', setting.view);
app.get('/help', help.view);

// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
