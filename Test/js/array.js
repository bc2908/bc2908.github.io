/*Khai báo array:Có 2 cách*/
var arr1 = ["BWM","Mitshubishi","Mazda"];
var arr2 = new Array("Car","Motor","Bike");

/*
    - Kiểu Mảng là 1 kiểu đặc biệt của kiểu đối tượng.Mảng sử dụng số để truy cập đến các phần tử con của nó và đánh số thứ tự các phần tử con
    - Trong cùng 1 mảng ta có thể có nhiều kiểu biến khác nhau(kiểu object,kiểu function,kiểu array)
*/

/*Truy cập 1 phần tử của mảng: arr[chỉ số phần tử]*/
document.getElementById("output").innerHTML = arr1[0];
/*Truy cập 1 mảng*/
document.getElementById("output1").innerHTML = arr2;

/*
+ Thuộc tính của mảng
    - Kiểm tra số phần tử của mảng dùng thuộc tính length: arr.length
+ Phương thức của mảng
    - Sắp xếp các phần tử của mảng tăng dần dùng phương thức size(): arr.size()
*/ 