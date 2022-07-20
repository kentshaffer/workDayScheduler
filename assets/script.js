var dateDisplayEl = $('#currentDay');
var timeSlot = $(this).parent().siblings("span").text();
var inputValue = $(this).parent().siblings("textarea").val()
var hourTimeSlot = $('#nine-container');

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

    var inputValue = $(this).parent().siblings("textarea").val()
    var timeSlot = $(this).parent().siblings("span").text();

    // localstorage save
    localStorage.setItem(timeSlot, inputValue);

});
console.log($('textarea'))
$('textarea').each( function (element) {

    var timeSlot = $(this).siblings("span").text();
    var existingValue = localStorage.getItem(timeSlot);
    console.log($(this))
    $(this).text(existingValue);
});

// do this for all elements - 9AM - 5PM
// grab value from localstorage
// save it to input elements

$('textarea').each( function () {

    let scheduleTime = $(this).parent().attr('id')
    let currentHour = moment().format('h');
    console.log(currentHour)

    if ($(scheduleTime).val > (currentHour).val) {
        hourTimeSlot.attr('background-color', 'green');

    } 
    else if  ((scheduleTime).val = (currentHour).val)
        hourTimeSlot.attr('background-color', 'gray');

     else { ((scheduleTime).val < (currentHour).val)
    hourTimeSlot.attr('background-color', 'red')
    };

});

    // var timeSlot = $(this).parent("span").text();
    // var existingValue = localStorage.getItem(timeSlot);
    // $(this).text(existingValue);
