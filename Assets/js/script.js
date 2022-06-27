var today =
    $("#currentDate").text(rightNow);

var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);

var currentHour = (new Date()).getHours();
$(".colorcode")
    .each(function(){
        var val = parseInt($(this).prop("id"));
        if(val > currentHour && val < currentHour + 10) {
            $(this).css("background-color", "green");
        } else if(val < currentHour && val > currentHour -10) {
            $(this).css("background-color", "grey");
        } else if(val === currentHour){
            $(this).css("background-color", "red");
        } else {
            $(this).css("background-color", "red");
        }
    });
