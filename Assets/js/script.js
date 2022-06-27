// load only after page is ready
$(document).ready(function () { 
    // print current date
    $("#currentDay").text(moment().format("LLLL"));

    // event listener for input updates
    $(".saveBtn").on("click", function (){
        var text = $(this).siblings(".edit_cont").val();
        var time = $(this).parent().attr("id");
        // set, local storage
        localStorage.setItem(time, text);
    })
    // get from local storage
    $("#0-eight-hundred .edit_cont").val(localStorage.getItem("0-eight-hundred"));
    $("#0-nine-hundred .edit_cont").val(localStorage.getItem("0-nine-hundred"));
    $("#ten-hundred .edit_cont").val(localStorage.getItem("ten-hundred"));
    $("#eleven-hundred .edit_cont").val(localStorage.getItem("eleven-hundred"));
    $("#twelve-hundred .edit_cont").val(localStorage.getItem("twelve-hundred"));
    $("#thirteen-hundred .edit_cont").val(localStorage.getItem("thirteen-hundred"));
    $("#fourteen-hundred .edit_cont").val(localStorage.getItem("fourteen-hundred"));
    $("#fifteen-hundred .edit_cont").val(localStorage.getItem("fifteen-hundred"));
    $("#sixteen-hundred .edit_cont").val(localStorage.getItem("sixteen-hundred"));
    $("#seventeen-hundred .edit_cont").val(localStorage.getItem("seventeen-hundred"));



    function hourTracker(){
        var currentHour = moment()
            .hour();
        // loop over time-blocks and check if class changes (past, present, future)
        $(".time-block")
            .each(function(){
                var blockHour = parseInt($(this)
                    .attr("id")
                    .split("hour")[1]);

                if (blockHour < currentHour) {
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");

                } else if (blockHour === currentHour) {
                    $(this).removeClass("past");
                    $(this).addClass("present");
                    $(this).removeClass("future");

                } else {
                    $(this).removeClass("present");
                    $(this).removeClass("past");
                    $(this).addClass("future");
                }
            })
    }
    hourTracker();
})
