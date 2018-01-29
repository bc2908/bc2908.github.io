$(document).ready(function () {
    var check = 1;
    var count = 0;
    var test = false;

    $(".box-check").click(function () {
        if (count != 0) {
            if (test != true) {
                if ($(this).find(".x-check").hasClass("x") == false && $(this).find(".o-check").hasClass("o") == false) {

                    if (check == 1) {
                        $(this).find(".x-check").css("display", "block").addClass("x");
                        check = 0;
                    } else {
                        $(this).find(".o-check").css("display", "block").addClass("o");
                        check = 1;
                    }

                    if (count >= 4) {
                        var row1_x = $(".row-check-1 .x").length;
                        var row2_x = $(".row-check-2 .x").length;
                        var row3_x = $(".row-check-3 .x").length;
                        var col1_x = $(".cl-1.x").length;
                        var col2_x = $(".cl-2.x").length;
                        var col3_x = $(".cl-3.x").length;
                        var x1_x = $(".x-1.x").length;
                        var x2_x = $(".x-2.x").length;

                        if (row1_x == 3 || row2_x == 3 || row3_x == 3 || col1_x == 3 || col2_x == 3 || col3_x == 3 || x1_x == 3 || x2_x == 3) {
                            $(".results").text("Player X Win");
                            test = true;
                        }

                        var row1_o = $(".row-check-1 .o").length;
                        var row2_o = $(".row-check-2 .o").length;
                        var row3_o = $(".row-check-3 .o").length;
                        var col1_o = $(".cl-1.o").length;
                        var col2_o = $(".cl-2.o").length;
                        var col3_o = $(".cl-3.o").length;
                        var x1_o = $(".x-1.o").length;
                        var x2_o = $(".x-2.o").length;

                        if (row1_o == 3 || row2_o == 3 || row3_o == 3 || col1_o == 3 || col2_o == 3 || col3_o == 3 || x1_o == 3 || x2_o == 3) {
                            $(".results").text("Player O Win");
                            test = true;
                        }

                        if (count == 8) {
                            if (test == false) {
                                $(".results").text("Not Player Win");
                                test = true;
                            }
                        }
                    }
                }
            }
        } else {
            $(this).find(".x-check").css("display", "block").addClass("x");
            check = 0;
        }
        count += 1;
    });
});