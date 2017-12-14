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
    var strNew = "abc";
    for (var i = str.length; i >= 0; i--) {
        strNew += str[i];
    }
    return strNew;
}
//console.log(bai2("hello"));