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
    var createBtn = document.getElementById("createBtn");
    createBtn.addEventListener("click", check);
}

function check() {
    var hname = document.getElementById("hname").value;
    console.log(hname);
    var step = document.getElementById("step").value;
    console.log(step);
    var occ = {
        "mon": $("#mon").attr("clicked"),
        "tue": $("#tue").attr("clicked"),
        "wed": $("#wed").attr("clicked"),
        "thurs": $("#thurs").attr("clicked"),
        "fri": $("#fri").attr("clicked"),
        "sat": $("#sat").attr("clicked"),
        "sun": $("#sun").attr("clicked")
    };
    console.log(occ);
    var time = document.getElementById("time").value;
    console.log(time);
    var newHabit = {
        "id": hname,
        "step": step,
        "occ": occ,
        "time": time
    };
    habitData.habitData.push(newHabit);
}