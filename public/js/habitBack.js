'use strict';

var firstStep;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    lsFirst();
    initializePage();
});

function lsFirst() {
    var firstFriend = localStorage.getItem('firstFriend');
    console.log(firstFriend);
    if (firstFriend == null) {
        localStorage.setItem('firstFriend', 'false');
        firstFriend = localStorage.getItem('firstFriend');
        console.log(firstFriend);
    }
    firstStep = localStorage.getItem('firstStep');
    console.log(firstStep);
    if (firstStep == null) {
        localStorage.setItem('firstStep', 'false');
        firstStep = localStorage.getItem('firstStep');
        console.log(firstStep);
    }
    var firstHabit = localStorage.getItem('firstHabit');
    console.log(firstHabit);
    if (firstHabit == null) {
        localStorage.setItem('firstHabit', 'false');
        firstHabit = localStorage.getItem('firstHabit');
        console.log(firstHabit);
    }
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("body").on("click", ".days label", function (e) {
        var getValue = $(this).attr("for");
        var goToParent = $(this).parents(".days");
        var getInputCheckBox = goToParent.find("input[id = " + getValue + "]");
        console.log(getInputCheckBox);
        console.log(getInputCheckBox.attr("checked"));
        if (getInputCheckBox.attr("checked") === undefined) {
            console.log("aaa");
            getInputCheckBox.attr("checked", "checked");
            $(this).css("background", "#af92ff");
            $(this).css("color", "white");
            if (firstStep == 'false') {
                localStorage.setItem('firstStep', 'true');
                firstStep = 'true';
                alert('You unlocked the badge!');
            }
        } else if (getInputCheckBox.attr("checked") === "checked") {
            console.log("bbb");
            getInputCheckBox.removeAttr("checked");
            $(this).css("background", "white");
            $(this).css("color", "black");
        }
        console.log(getInputCheckBox.attr("id"));
    });
}