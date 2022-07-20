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

[...$('textarea')].forEach( function (element) {

    var timeSlot = $(element).siblings("span").text();
    var existingValue = localStorage.getItem(timeSlot);
    element.value = existingValue;
});

// do this for all elements - 9AM - 5PM
// grab value from localstorage
// save it to input elements

// function changeHourColor() {
//   let hour = now.getHours();
//   if (hour <= 9) {
//       document.write(hourTimeSlot: background: green)
//   }
// }