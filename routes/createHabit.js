var habitData = require('../habitData.json');
/*
 * GET create habit page.
 */

exports.view = function (req, res) {
    res.render('createHabit');
};

exports.create = function (req, res) {
    var hname = req.query.hname;
    var step = req.query.step;
    var time = req.query.time;
    var occ = {
        "mon": req.query.mon,
        "tue": req.query.tues,
        "wed": req.query.wed,
        "thurs": req.query.thurs,
        "fri": req.query.fri,
        "sat": req.query.sat,
        "sun": req.query.sun
    };
    var newHabit = {
        "hname": hname,
        "step": step,
        "occ": occ,
        "time": time
    };
    habitData.habitData.push(newHabit);
    res.render('habit', habitData);
};