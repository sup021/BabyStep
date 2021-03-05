'use strict';

var firstFriend;
var firstStep;
var firstHabit;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    getItemFromLS();
    achievement();
});

function getItemFromLS() {
    firstFriend = localStorage.getItem('firstFriend');
    console.log(firstFriend);
    firstStep = localStorage.getItem('firstStep');
    console.log(firstStep);
    firstHabit = localStorage.getItem('firstHabit');
    console.log(firstHabit);
}

function achievement() {
    if (firstFriend == 'true') {
        $('.icon1').attr('src', 'css/image/BadgeIcons/icon1.png')
    }
    if (firstStep == 'true') {
        $('.icon4').attr('src', 'css/image/BadgeIcons/icon4.png')
    }
    if (firstHabit == 'true') {
        $('.icon3').attr('src', 'css/image/BadgeIcons/icon3.png')
    }
}