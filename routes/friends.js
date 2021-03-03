var friendsData = require('../friends.json');

/*
 * GET habit page.
 */

exports.view = function (req, res) {
  res.render('friends', friendsData);
};