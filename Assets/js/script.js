// load only after page is ready
// $(document).ready(function readyStart() { 
function readyStart() {     
    // print current date
    $("#currentDay").text(moment().format("LLLL"));

    // event listener for input updates
    $(".saveBtn").on("click", function (){
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        // set, local storage
        localStorage.setItem(time, text);
    })
    // get from local storage
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
}
    var hourTracker = function(){
        // get current hour
        var currentHour = parseInt(moment().hour());
        console.log(currentHour, "this is the current hour");
        // loop over time-blocks and check if class changes (past, present, future)
        $(".time-block").each(function(){
            var blockHour = $(this).attr("id");
            console.log(blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");

            } else if (blockHour == currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");

            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
                
        })
        
    }
       
setInterval(hourTracker(), 5000);
readyStart();