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
    var occ = [];
    var time = req.query.time;

    var mon = req.query.mon;
    var tues = req.query.tues;
    var wed = req.query.wed;
    var thurs = req.query.thurs;
    var fri = req.query.fri;
    var sat = req.query.sat;
    var sun = req.query.sun;
    var arr = [mon, tues, wed, thurs, fri, sat, sun];
    for (i = 0; i < 7; i++) {
        if (arr[i] != undefined) {
            occ.push(arr[i]);
        }
    }

    var newHabit = {
        "hname": hname,
        "step": step,
        "occ": occ,
        "time": time
    };
    console.log(newHabit);
    habitData.habitData.push(newHabit);
    habitData.viewEmpty = false;
    res.render('habit', habitData);
};