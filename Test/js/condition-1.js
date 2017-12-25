//Bài 1
var now = new Date;
var nowDate = now.getDate();
var nowMonth = now.getMonth() + 1;
var nowYear = now.getFullYear();

document.writeln("Hôm nay là ngày: " + nowDate + " tháng " + nowMonth + " năm " + nowYear + "<br>");
if (nowMonth <= 3) {
    document.writeln("Bây giờ là mùa xuân");
} else if (nowMonth >= 4 && nowMonth <= 6) {
    document.writeln("Bây giờ là mùa hạ");
} else if (nowMonth >= 7 && nowMonth <= 9) {
    document.writeln("Bây giờ là mùa thu");
} else {
    document.writeln("Bây giờ là mùa đông");
}

//Bài 2
function bai2(x) {
    // Kiểm tra xem tham số nhập vào có phải là chuỗi không
    var str = "";
    var newStr="";
    checkStr = isNaN(x);
    if (checkStr == false) {
        str=x;
        console.log(isNaN(str));
    }else{
        if(str.length<=10){
            document.write(str+"<br>");
        }else{
            var i=0;
            do{
                newStr[i]=str[i];
                i++;
                console.log(str[i]);
            }while(i<10);
        }
    }
    document.write(newStr+"..."+"<br>");
}
console.log(bai2("12365558885256688"));
console.log(isNaN((123).toString()));

//Bài 3
//Bài 4
//Bài 5
//Bài 6