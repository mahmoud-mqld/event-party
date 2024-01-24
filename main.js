var initialText = "Open";

$("#btn").text(initialText);



$("#btn").on("click", function () {
  $("#left").toggleClass("menu-open");
  var newText = $("#btn").text() == initialText ? `  Close` : initialText;
  $("#btn").text(newText);
  $("#nav").toggle(150).toggleClass("fixed");
  $("#btn").toggleClass("");
});

$("#Details h2").on("click", function () {
  $("#Details p").slideUp();
  $(this).next("#Details p").slideToggle();
});

$("#nav a").on("click", function () {
  let sectionId = $(this).attr("href");
  let target = $(sectionId).offset().top;
  $("body,html").animate({ scrollTop: target }, 1000);
});


$("#close").on("click", function () {
  $("#nav").toggle(150).toggleClass("fixed");

  $("#left").removeClass("menu-open");})

const targetDate = "2024-7-27 07:00:00"
function calcCountdown(targetDate)

 {

const now = new Date().getTime();
const eventDate = new Date(targetDate).getTime();
const countDown = eventDate - now

if (countDown <= 0) {
  return "Time's up!";
}

const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
return `
<h3 class="d"> ${days}d</h3>
 <h3 class="h">${hours}h</h3>
 <h3 class="m"> ${minutes}m</h3>
 <h3 class="s">${seconds}s</h3>
 `;
}

function displayCounter(targetDate) {
  const countdownValue = calcCountdown(targetDate);
$('#countdown').html(countdownValue)

if (countdownValue === "Time's up!") {
  clearInterval(countdownInterval);
}
}


calcCountdown(targetDate)
displayCounter(targetDate);
const updateCounter = setInterval(() => {
  displayCounter(targetDate);
}, 1000);




  $("#inputText").on("input", function () {
    var textValue = $(this).val();
    var maxChars = 100; 
    var remainingChars = maxChars - textValue.length;
    $("#charCount").text(remainingChars);

    if (remainingChars < 0) {
      $("#charCount").css("color", "red").text(" ستوب يا بني"); 
    } else {
      $("#charCount").css("color", "");
    }
  });
