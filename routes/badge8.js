var badgeData = require("../badges.json");

/*
 * GET habit page.
 */

exports.view = function (req, res) {
  res.render('badges/icon8', badgeData);
};