var dateDisplayEl = $('#currentDay');
var timeSlot = $(this).parent().siblings("span").text();
var inputValue = $(this).parent().siblings("textarea").val()

function updateDay() {
    currentDate = moment().format('dddd, MMMM Do');
    dateDisplayEl.text(currentDate);
};

setInterval(updateDay, 1000);

function saveTodoListItem(event) {
    event.preventDefault();
};
// on click ADD button - save to localstorage
// event listner for all the add buttons
$( ".btn-primary" ).on( "click", function() {

    // grab value from input
    var inputValue = $(this).parent().siblings("textarea").val()
    // grab time slot e.g. 9AM
    var timeSlot = $(this).parent().siblings("span").text();

    // localstorage save
    localStorage.setItem(timeSlot, inputValue);
    localStorage.getItem(inputValue);
});



// do this for all elements - 9AM - 5PM
// grab value from localstorage
// save it to input elements
