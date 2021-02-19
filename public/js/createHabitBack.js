'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $('button.day').click(clickWeekBtn);
}

function clickWeekBtn(result) {
    // Prevent following the link
    result.preventDefault();

    if ($(this).attr('clicked') == "true") {
        $(this).css('background-color', '#fffbfb');
        $(this).attr('clicked', 'false');
    } else {
        $(this).css('background-color', '#3e8e41');
        $(this).attr('clicked', "true");
    }
}

function required() {
    var name = document.form1.hname.value;
    var step = document.form1.step.value;
    var occ = ($(document.form1.option1).attr('clicked') == "true")
        || ($(document.form1.option2).attr('clicked') == "true")
        || ($(document.form1.option3).attr('clicked') == "true")
        || ($(document.form1.option4).attr('clicked') == "true")
        || ($(document.form1.option5).attr('clicked') == "true")
        || ($(document.form1.option6).attr('clicked') == "true")
        || ($(document.form1.option7).attr('clicked') == "true");

    var remind = document.form1.appt.value

    if (name != "" && step != "" && occ == true && remind != "") {
        alert('Habit has been created');
        return false;
    }
    else {
        alert("Please input a Value");
        return true;
    }
}