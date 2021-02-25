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
        console.log(getInputCheckBox);
        console.log(getInputCheckBox.attr("checked"));
        if (getInputCheckBox.attr("checked") === undefined) {
            console.log("aaa");
            getInputCheckBox.attr("checked", "checked");
            $(this).css("background", "rgb(16, 119, 253)");
            $(this).css("color", "white");
        } else if (getInputCheckBox.attr("checked") === "checked") {
            console.log("bbb");
            getInputCheckBox.removeAttr("checked");
            $(this).css("background", "white");
            $(this).css("color", "black");
        }
        console.log(getInputCheckBox.attr("id"));
    });
}