//Bài 1
var now = new Date;
var nowDate = now.getDate();
var nowMonth = now.getMonth() + 1;
var nowYear = now.getFullYear();

document.writeln("Hôm nay là ngày: " + nowDate + " tháng " + nowMonth + " năm " + nowYear + "<br>");
if (nowMonth <= 3) {
    document.writeln("Bây giờ là mùa xuân" + "<br>");
} else if (nowMonth >= 4 && nowMonth <= 6) {
    document.writeln("Bây giờ là mùa hạ" + "<br>");
} else if (nowMonth >= 7 && nowMonth <= 9) {
    document.writeln("Bây giờ là mùa thu" + "<br>");
} else {
    document.writeln("Bây giờ là mùa đông" + "<br>");
}

//Bài 2
function bai2(x) {
    // Kiểm tra xem tham số nhập vào có phải là chuỗi không
    var str = x;
    if (typeof (str) == "number") {
        str = str.toString();
        // str = String(str);
    }

    // Cắt chuỗi
    var newStr = "";
    if (str.length <= 10) {
        document.write(str + "<br>");
    } else {
        var i = 0;
        do {
            newStr += str[i];
            i++;
        } while (i < 10);
        document.write(newStr + "..." + "<br>");
    }
}
console.log(bai2(6259856644788855));

//Bài 3
function bai3(x) {
    if (x >= 0 && x <= 3.9) {
        document.write("Bạn được điểm F môn lập trình web" + "<br>");
    } else if (x >= 4 && x <= 5.4) {
        document.write("Bạn được điểm D môn lập trình web" + "<br>");
    } else if (x >= 5.5 && x <= 6.9) {
        document.write("Bạn được điểm C môn lập trình web" + "<br>");
    } else if (x >= 7 && x <= 8.4) {
        document.write("Bạn được điểm B môn lập trình web" + "<br>");
    } else if (x >= 8.5 && x <= 10) {
        document.write("Bạn được điểm A môn lập trình web" + "<br>");
    } else {
        document.write("Bạn nhập sai điểm" + "<br>");
    }
}
console.log(bai3(9));

//Bài 4
function translate(idNation) {
    switch (idNation) {
        case 0:
            document.write("你好" + "<br>");
            break;
        case 1:
            document.write("Ahoj" + "<br>");
            break;
        case 2:
            document.write("Hola" + "<br>");
            break;
        case 3:
            document.write("Helló" + "<br>");
            break;
        case 4:
            document.write("Hoi") + "<br>";
            break;
        default:
            document.write("Xin chào" + "<br>");
    }
}
console.log(translate());

//Bài 5
function bai5(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == true) {
            document.write("Giá trị true xuất hiện lần đầu trong mảng ở vị trí: " + i + "<br>");
            break;
        }
    }
}
var arr = [false, false, false, true, false, true, false, true];
console.log(bai5(arr));

//Bài 6
function bai6() {
    for (var i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            document.write("<p style='color:blue'>" + i + "</p>" + "<br>");
        } else {
            document.write("<p style='color:red'>" + i + "</p>" + "<br>");
        }
    }
}
console.log(bai6());