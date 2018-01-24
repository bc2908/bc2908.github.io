// Responsive
$(document).ready(function () {
    var size = $(window).width();
    if (size >= 320 && size <= 576) {
        $(".part-left-home").addClass("text-center");
    }
})

$(window).resize(function () {
    if ($(this).width() >= 320 && $(this).width() <= 576) {
        $(".part-left-home").addClass("text-center");
    }
    else if ($(this).width() > 576) {
        $(".part-left-home").removeClass("text-center");
    }
});