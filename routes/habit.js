var habitbox = require('../habitbox.json');
/*
 * GET habit page.
 */

exports.view = function (req, res) {
  res.render('habit', habitbox);
};