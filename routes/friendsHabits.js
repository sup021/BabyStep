var habitData = require('../habitData.json');

/*
 * GET habit page.
 */

exports.view = function (req, res) {
  res.render('friendsHabits', habitData);
};