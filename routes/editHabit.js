var habitData = require('../habitData.json');
/*
 * GET edit habit page.
 */

exports.view = function (req, res) {
    var index = req.params.index;
    var habitInfo = habitData.habitData[index];
    res.render('editHabit', {
        "index": index,
        "hname": habitInfo.hname,
        "step": habitInfo.step,
        "time": habitInfo.time
    });
};

exports.postJSON = function (req, res) {
    var index = req.params.index;
    var habitInfo = habitData.habitData[index];
    res.json(habitInfo);
};

exports.save = function (req, res) {
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

    var index = req.params.index;
    habitData.habitData[index] = newHabit;
    res.render('habit', habitData);
};