'use strict';

var firstFriend;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    getItemFromLS();
    achievement();
});

function getItemFromLS() {
    firstFriend = localStorage.getItem('firstFriend');
    console.log(firstFriend);
}

function achievement() {
    if (firstFriend == 'true') {
        $('.icon1').attr('src', '../css/image/BadgeIcons/icon1.png')
    }
}