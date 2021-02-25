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
}