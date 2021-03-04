var habitData = require('../habitData.json');
/*
 * GET habit page.
 */

exports.view = function (req, res) {
  if (habitData.habitData.length === 0) {
    habitData.viewEmpty = true;
  } else {
    habitData.viewEmpty = false;
  }
  res.render('habit', habitData);
};

exports.delete = function (req, res) {
  var index = req.params.index;
  habitData.habitData.splice(index, 1);
  if (habitData.habitData.length === 0) {
    habitData.viewEmpty = true;
  } else {
    habitData.viewEmpty = false;
  }
  res.render('habit', habitData);
};