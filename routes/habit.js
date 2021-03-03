var habitData = require('../habitData.json');
/*
 * GET habit page.
 */

exports.view = function (req, res) {
  res.render('habit', habitData);
};

exports.delete = function (req, res) {
  var index = req.params.index;
  habitData.habitData.splice(index, 1);
  res.render('habit', habitData);
};