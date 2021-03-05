'use strict';

var firstHabit;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    getItemFromLS();
    achievement();
});

function getItemFromLS() {
    firstHabit = localStorage.getItem('firstHabit');
    console.log(firstHabit);
}

function achievement() {
    if (firstHabit == 'true') {
        $('.icon1').attr('src', '../css/image/BadgeIcons/icon3.png')
    }
}