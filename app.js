
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
var friends = require('./routes/friends');
var badges = require('./routes/badges');
var friendsHabits = require('./routes/friendsHabits')
var badge1 = require('./routes/badge1');
var badge2 = require('./routes/badge2');
var badge3 = require('./routes/badge3');
var badge4 = require('./routes/badge4');
var badge5 = require('./routes/badge5');
var badge6 = require('./routes/badge6');
var badge7 = require('./routes/badge7');
var badge8 = require('./routes/badge8');
var badge9 = require('./routes/badge9');
var badge10 = require('./routes/badge10');
var badge11 = require('./routes/badge11');
var badge12 = require('./routes/badge12');
var badge13 = require('./routes/badge13');
var badge14 = require('./routes/badge14');
var badge15 = require('./routes/badge15');
var badge16 = require('./routes/badge16');

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
app.get('/friends', friends.view);
app.get('/badges',badges.view);
app.get('/friends/habits', friendsHabits.view);
app.get('/badges/1', badge1.view);
app.get('/badges/2', badge2.view);
app.get('/badges/3', badge3.view);
app.get('/badges/4', badge4.view);
app.get('/badges/5', badge5.view);
app.get('/badges/6', badge6.view);
app.get('/badges/7', badge7.view);
app.get('/badges/8', badge8.view);
app.get('/badges/9', badge9.view);
app.get('/badges/10', badge10.view);
app.get('/badges/11', badge11.view);
app.get('/badges/12', badge12.view);
app.get('/badges/13', badge13.view);
app.get('/badges/14', badge14.view);
app.get('/badges/15', badge15.view);
app.get('/badges/16', badge16.view);



// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
