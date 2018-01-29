function LuckyNum(x) {

    var x = String(x);
    var numPart1 = 0;
    var numPart2 = 0;

    for (var i = 0; i <= (x.length / 2) - 1; i++) {
        numPart1 += Number(x[i]);
    }

    for (var j = (x.length / 2); j < x.length; j++) {
        numPart2 += Number(x[j]);
    }

    if (numPart1 == numPart2) {
        return true;
    } else {
        return false;
    }
}
console.log(LuckyNum(1230));
console.log(LuckyNum(123456));

function FormatString(str) {
    var newStr = "";
    var lastStr = "";
    var n;

    for (var i = 0; i < str.length; i++) {
        if (str[i] != ",") {
            newStr += str[i];
        }
    }

    newStr += ".";

    for (var j = 0; j < newStr.length; j++) {
        n = newStr.charCodeAt(j);
        if (j != 0) {
            if (n < 97 && n != 32 && n != 46) {
                n += 32;
                lastStr += String.fromCharCode(n);
            } else {
                lastStr += newStr[j];
            }
        } else {
            n -= 32;
            lastStr += String.fromCharCode(n);
        }
    }
    return lastStr;
}
console.log(FormatString("welcome, to The Test"));

function MaxArrList(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max.length < arr[i].length) {
            max = arr[i];
        }
    }

    var newArr = [];
    for (var j = 0; j < arr.length; j++) {
        if (arr[j].length == max.length) {
            newArr[newArr.length] = arr[j];
        }
    }

    return newArr;
}
arr = ["abc", "hello", "12345", "tech"];
console.log(MaxArrList(arr));

function SearchGold(weight1, value1, weight2, value2, weight3) {
    if (weight1 + weight2 > weight3) {
        if (value1 > value2) {
            return value1;
        } else {
            return value2;
        }
    } else {
        return value1 + value2;
    }
}
console.log(SearchGold(5, 10, 4, 6, 8));
console.log(SearchGold(5, 10, 4, 6, 9));

