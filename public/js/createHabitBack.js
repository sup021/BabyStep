'use strict';

var firstHabit;
var numRecommend = 0;

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    checkFirstHabit();
    numRecommend = 0;
    $("#recommend").click(recommend);
    $("body").on("click", ".days label", function (e) {
        var getValue = $(this).attr("for");
        var goToParent = $(this).parents(".days");
        var getInputCheckBox = goToParent.find("input[id = " + getValue + "]");
        console.log(getInputCheckBox.attr("id"));
    });
    requiredCB();
}

function checkFirstHabit() {
    firstHabit = localStorage.getItem('firstHabit');
    if (firstHabit == 'false') {
        localStorage.setItem('firstHabit', 'true');
        firstHabit = 'true';
        alert('You unlocked the badge!');
    }
}

function recommend() {
    var getValue = $("#hname").val();
    if (numRecommend === 0) {
        $("#step").attr("value", "10 minute " + getValue);
        numRecommend++;
    } else if (numRecommend === 1) {
        $("#step").attr("value", "5 minute " + getValue);
        numRecommend++;
    } else {
        $("#step").attr("value", "1 minute " + getValue);
    }
}

function requiredCB() {
    var requiredCheckboxes = $('.days :checkbox[required]');
    requiredCheckboxes.change(function () {
        if (requiredCheckboxes.is(':checked')) {
            requiredCheckboxes.removeAttr('required');
        } else {
            requiredCheckboxes.attr('required', 'required');
        }
    });
}