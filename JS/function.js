var one="#0e131b";
$(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() >= $("#portfolio").position().top) {
    $('body').css('background', $("#one").attr("data-color"));
    }});