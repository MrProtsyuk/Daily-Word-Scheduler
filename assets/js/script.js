var todaysDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todaysDate);

$(document).ready(function () {
    //Click button
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //Saving to local storage
        localStorage.setItem(time, text);
    })
})

