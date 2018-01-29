$(document).ready(function () {
    // Responsive
    var size = $(window).width();
    if (size >= 320 && size <= 576) {
        $(".part-left-home").addClass("text-center");

        // Slider
        $("#0").addClass("show-slider");
    } else if (size > 576 && size <= 768) {
        $(".card").each(function (index) {
            // console.log(index + ": " + $(this).attr('id'));
            if (index <= 1) {
                $("#" + index).addClass("show-slider");
            } else {
                return false;
            }
        });
    } else {
        $(".card").each(function (index) {
            if (index <= 2) {
                $("#" + index).addClass("show-slider");
            } else {
                return false;
            }
        });
    }
});

// Resize
$(window).resize(function () {
    if ($(this).width() >= 320 && $(this).width() <= 576) {
        $(".part-left-home").addClass("text-center");
    }
    else if ($(this).width() > 576) {
        $(".part-left-home").removeClass("text-center");
    }

    // Slider
    var numSlider = $(".card.show-slider").length;
    if ($(this).width() >= 320 && $(this).width() <= 576) {
        $(".card").each(function (index) {
            if (index != 0) {
                if ($("#" + index).attr('class') == "card show-slider") {
                    $("#" + index).removeClass("show-slider");
                }
            }
        });
    } else if ($(this).width() > 576 && $(this).width() <= 768) {
        if (numSlider == 1) {
            var idSlider = parseInt($(".card.show-slider").attr('id'), 10);
            $("#" + (idSlider + 1)).addClass("show-slider");
        } else if (numSlider == 3) {
            $(".card").each(function (index) {
                if (index >= 2) {
                    if ($("#" + index).attr('class') == "card show-slider") {
                        $("#" + index).removeClass("show-slider");
                    }
                }
            });
        } else {
            return false;
        }
    } else {
        if (numSlider == 1) {
            $(".card").each(function (index) {
                if (index > 2) {
                    if ($("#" + index).attr('class') == "card show-slider") {
                        $("#" + index).removeClass("show-slider");
                    }
                } else {
                    if (index != 0) {
                        $("#" + index).addClass("show-slider");
                    }
                }
            });
        } else if (numSlider == 2) {
            var idSlider1 = parseInt($(".card.show-slider").get(numSlider - 1).getAttribute('id'));
            $("#" + (idSlider1 + 1)).addClass("show-slider");
            $(".card").each(function (index) {
                if (index > 2) {
                    if ($("#" + index).attr('class') == "card show-slider") {
                        $("#" + index).removeClass("show-slider");
                    }
                }
            });
        } else {
            return false;
        }
    }
});


