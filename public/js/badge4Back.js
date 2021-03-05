'use strict';

var firstStep;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    getItemFromLS();
    achievement();
});

function getItemFromLS() {
    firstStep = localStorage.getItem('firstStep');
    console.log(firstStep);
}

function achievement() {
    if (firstStep == 'true') {
        $('.icon1').attr('src', '../css/image/BadgeIcons/icon4.png')
    }
}