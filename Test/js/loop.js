//Bài 1.Tính giai thừa
function bai1(n) {
    for (var i = n - 1; i > 1; i--) {
        n *= i;
    }
    return n;
}
//console.log(bai1(5));

//Bài 2.Đảo ngược chuỗi
function bai2(str) {
    var strNew = " ";
    for (var i = str.length - 1; i >= 0; i--) {
        strNew += str[i];
    }
    return strNew;
}
//console.log(bai2("hello"));

//Bài 3.Sao chép chuỗi
function duplicate(str) {
    firstStr = "-" + str + "-";

    midStr = str + "-";

    lastStr = str;

    for (var i = 0; i < 10; i++) {
        if (i < 1) {
            str += firstStr;
        } else if (i < 9) {
            str += midStr;
        } else {
            str += lastStr;
        }
    }
    return str;
}
function bai3() {
    var result = duplicate("123");
    return result;
}
//console.log(bai3());

//Bài 4.Sắp xếp thứ tự tên học viên theo bảng chữ cái
function bai4(arrStudent) {
    arrStudent.sort();
    for (var i = 0; i < arrStudent.length; i++) {
        document.write((i + 1) + "." + arrStudent[i] + "<br>");
    }
}
//var students=["Hoang","Nam","Cuong","Binh","An"];
//console.log(bai4(students));

//Bài 5.Gấp đôi giá trị các số trong mảng
function bai5(arrNum) {
    for (var i = 0; i < arrNum.length; i++) {
        arrNum[i] *= 2;
    }
    return arrNum;
}
//var nums = [1,3,4];
//console.log(bai5(nums));

//BÀi 6.Tạo ra 1 mảng mới với các số là số dư tương ứng khi chia các số trong mảng cũ cho 2
function bai6(arrNum) {
    for (var i = 0; i < arrNum.length; i++) {
        arrNum[i] = arrNum[i] % 2;
    }
    return arrNum;
}
var nums = [5, 13, 27];
console.log(bai6(nums));