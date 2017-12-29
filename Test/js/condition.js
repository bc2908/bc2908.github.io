//Bài 1
function bai1(x, y) {
    //Kiểm tra tham số có phải là số không
    if (typeof (x) != "number" || typeof (y) != "number") {
        document.write("Tham số không phải là số" + "<br>");
    } else {
        //Tìm số lớn nhất trong 2 số
        if (x > y) {
            return x;
        } else {
            return y;
        }
    }
}
console.log(bai1(12, "2589999999"));

//Bài 2
function bai2(x) {
    //Kiểm tra tham số có phải là số nguyên dương không
    if (typeof (x) == "number" && x > 0) {
        for (var i = x - 1; i > 1; i--) {
            x *= i;
        }
        document.write("Giai thừa của 5 là: " + x);
    } else {
        document.write("Tham số không phải là số nguyên dương");
    }
}
console.log(bai2(5));

//Bài 3
function bai3(arr) {
    //Lấy số chẵn sang mảng mới
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArr[newArr.length] = arr[i];
        }
    }
    //Sắp xếp mảng theo thứ tự giảm dần
    for (var i = 0; i < newArr.length - 1; i++) {
        for (var j = i + 1; j < newArr.length; j++) {
            if (newArr[j] > newArr[i]) {
                var temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr;
}
var arr = [3, 5, 4, 23, 8, 19, 33, 56, 11, 2, 10];
console.log(bai3(arr));

//Bài 4
user = {
    username: "adam levin",
    password: "abc123",
    confirm: "abc123"
}
function bai4(user) {
    //Kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự
    var check1 = false;
    if (user.username.length > 0 && user.username.length <= 20) {
        check1 = true;
    }
    //Kiểm tra password phải có độ dài từ 6 đến 32 ký tự
    var check2 = false;
    if (user.password.length >= 6 && user.password.length <= 32) {
        check2 = true;
    }
    //Kiểm tra confirm phải giống password.
    var check3 = false;
    var count = 0;
    if (user.password.length == user.confirm.length) {
        for (var i = 0; i < user.password.length; i++) {
            if (user.password.charCodeAt(i) == user.confirm.charCodeAt(i)) {
                count += 1;
            }
        }
        if (count == user.password.length) {
            check3 = true;
        }
    }

    if (check1 == true && check2 == true && check3 == true) {
        console.log("Thông tin người dùng hợp lệ");
    } else {
        console.log("Thông tin người dùng không hợp lệ");
    }
}
console.log(bai4(user));