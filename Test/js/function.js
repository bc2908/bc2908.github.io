//Bài 1
function bai1(x) {
    return x * x;
}
//console.log(bai1(5));

//Bài 2
function bai2(a, b, c) {
    var temp = (3 * a) + (2 * b) - c;
    return bai1(temp);
}
//console.log(bai2(1,1,1));

//Bài 3
function bai3(chuoi) {
    var chuoiMoi = "";
    for (var i = 0; i < chuoi.length; i++) {
        chuoiMoi += chuoi[i];
    }
    chuoiMoi += "...";
    return chuoiMoi;
}
//console.log(bai3("Techmaster is very fun"));

//Bài 4
function bai4(chuoi) {
    //Lấy từ đầu tiên
    var chuoiMot = "";
    for (var i = 0; i < chuoi.length; i++) {
        if (chuoi[i] == " ") {
            break;
        } else {
            chuoiMot += chuoi[i];
        }
    }
    //Lấy các từ còn lại
    var chuoiHai = "";
    for (var i = chuoiMot.length; i < chuoi.length; i++) {
        chuoiHai += chuoi[i];
    }
    //Viết hoa từ đầu tiên
    var chuoiHoa = "";
    for (var i = 0; i < chuoiMot.length; i++) {
        if (chuoiMot.charCodeAt(i) <= 90 || chuoiMot.charCodeAt[i] >= 65) {
            chuoiHoa += chuoiMot[i];
        } else {
            var n = chuoiMot.charCodeAt(i);
            n -= 32;
            chuoiHoa += String.fromCharCode(n);
        }
    }
    return chuoiHoa + chuoiHai;
}
//console.log(bai4("techMaster is very fun"));

//Bài 5
function bai5(mang) {
    var min = mang[0];
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] < min) {
            min = mang[i];
        }
    }
    return min;
}
var mangA = [6, 2, 9, 8, 7, 1, 2, 4, 3];
console.log(bai5(mangA));

//Bài 6