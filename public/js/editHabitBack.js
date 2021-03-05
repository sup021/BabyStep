'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function () {
    initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
    $("body").on("click", ".days label", function (e) {
        var getValue = $(this).attr("for");
        var goToParent = $(this).parents(".days");
        var getInputCheckBox = goToParent.find("input[id = " + getValue + "]");
        console.log(getInputCheckBox.attr("id"));
    });
    requiredCB();
    checkDays();
}

function checkDays() {
    // Get the div ID, e.g., "project3"
    var currUrl = window.location.href;
    // get rid of 'project' from the front of the id 'project3'
    var index = currUrl.substr('http://a7-babystep.herokuapp.com/editHabit/'.length);

    console.log("User clicked on json " + index);

    var url = $.get("http://a7-babystep.herokuapp.com/editHabit/JSON/" + index, callBackFn);
}

function callBackFn(result) {
    var occ = result.occ;
    occ.forEach(element => {
        console.log(element);
        $("#" + element).click();
    });
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