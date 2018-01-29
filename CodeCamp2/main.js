var u23 =
    [
        {
            name: "Bui Tien Dung",
            position: "Thu mon",
            birth_year: 1997,
            height: "1m81",
            club: "FLC Thanh Hoa"
        },
        {
            name: "Bui Tien Dung",
            position: "Trung ve",
            birth_year: 1995,
            height: "1m76",
            club: "Viettel"
        },
        {
            name: "Nguyen Cong Phuong",
            position: "Tien dao",
            birth_year: 1996,
            height: "1m68",
            club: "HAGL"
        },
        {
            name: "Pham Xuan Manh",
            position: "Hau ve canh",
            birth_year: 1995,
            height: "1m68",
            club: "SLNA"
        },
        {
            name: "Luong Xuan Truong",
            position: "Tien ve",
            birth_year: 1995,
            height: "1m75",
            club: "HAGL"
        },
        {
            name: "Pham Duc Huy",
            position: "Tien ve",
            birth_year: 1995,
            height: "1m75",
            club: "HN"
        },
        {
            name: "Do Duy Manh",
            position: "Trung ve",
            birth_year: 1996,
            height: "1m85",
            club: "HN"
        },
        {
            name: "Phan Van Duc",
            position: "Tien ve",
            birth_year: 1996,
            height: "1m70",
            club: "SLNA"
        },
        {
            name: "Vu Van Thanh",
            position: "Hau ve canh",
            birth_year: 1996,
            height: "1m70",
            club: "HAGL"
        },
        {
            name: "Nguyen Quang Hai",
            position: "Tien ve",
            birth_year: 1997,
            height: "1m70",
            club: "HN"
        },
        {
            name: "Tran Dinh Trong",
            position: "Trung ve",
            birth_year: 1997,
            height: "1m80",
            club: "SG"
        }
    ];

// Trả về tổng số lượng cầu thủ
function countAllPlayers() {
    return u23.length;
}
console.log(countAllPlayers());

// Kiểm tra xem số lượng cầu thủ có đủ tối thiểu 16 người hay không. Kết quả trả về true hoặc false.
function checkNumberOfPlayers() {
    if (u23.length > 16) {
        return true;
    } else {
        return false;
    }
}
console.log(checkNumberOfPlayers());

// Lấy ra danh sách các cầu thủ theo năm sinh
function getPlayersByBirthYear(year) {
    var arrPlayer = [];
    for (var i = 0; i < u23.length; i++) {
        if (u23[i]['birth_year'] == year) {
            arrPlayer[arrPlayer.length] = u23[i]['name'];
        }
    }
    return arrPlayer;
}
console.log(getPlayersByBirthYear(1997));

// Lấy ra danh sách các cầu thủ theo câu lạc bộ
function getPlayersByClub(club) {
    var arrPlayer = [];
    for (var i = 0; i < u23.length; i++) {
        if (u23[i]['club'] == club) {
            arrPlayer[arrPlayer.length] = u23[i]['name'];
        }
    }
    return arrPlayer;
}
console.log(getPlayersByClub('HAGL'));

// Lấy ra danh sách các cầu thủ có chiều cao lớn hơn tham số truyền vào
function getTallerPlayers(height) {
    var numheight = parseInt(height.substring(2)) + 100;
    var arrPlayer = [];
    for (var i = 0; i < u23.length; i++) {
        if (parseInt(u23[i]['height'].substring(2)) + 100 > numheight) {
            arrPlayer[arrPlayer.length] = u23[i]['name'];
        }
    }
    return arrPlayer;
}
console.log(getTallerPlayers('1m70'));

// Trả về danh sách các cầu thủ sắp xếp theo tên theo thứ tự alphabet
function sortPlayersByName() {
    var arrName = [];
    for (var i = 0; i < u23.length; i++) {
        arrName[arrName.length] = u23[i]['name'];
    }
    arrName.sort();
    for (var i = 0; i < arrName.length; i++) {
        var temp;
        for (var j = 0; j < u23.length; j++) {
            if (u23[j]['name'] == arrName[i]) {
                if (j != i) {
                    temp = u23[j];
                    u23[j] = u23[i];
                    u23[i] = temp;
                }
            }
        }
    }
    var newU23 = [];
    for (var i = 0; i < u23.length; i++) {
        newU23[i] = u23[i];
    }
    return newU23;
}
console.log(sortPlayersByName());

// Trả về danh sách các cầu thủ sắp xếp theo thứ tự chiều cao tăng dần.
function sortPlayersByHeight() {
    var arrHeight = [];
    for (var i = 0; i < u23.length; i++) {
        arrHeight[arrHeight.length] = parseInt(u23[i]['height'].substring(2)) + 100;
    }
    arrHeight.sort();
    for (var i = 0; i < arrHeight.length; i++) {
        var temp;
        for (var j = 0; j < u23.length; j++) {
            if (parseInt(u23[j]['height'].substring(2)) + 100 == arrHeight[i]) {
                if (j != i) {
                    temp = u23[j];
                    u23[j] = u23[i];
                    u23[i] = temp;
                }
            }
        }
    }
    return u23;
}
console.log(sortPlayersByHeight());

// Trả về thông tin một cầu thủ ngẫu nhiên. Kết quả trả về là một object.
function getRandomPlayer() {
    var index = Math.floor(Math.random() * 11);
    var randomPlayer = u23[index];
    return randomPlayer;
}
console.log(getRandomPlayer());

// Lấy ra vị trí của cầu thủ theo thứ tự index trong mảng
function getPositionOfPlayer(index) {

    return u23[index]['position'];
}
console.log(getPositionOfPlayer(3));

// Trả về kết quả dự đoán trận chung kết chiều nay, true hoặc false
function isVietnamWin() {
    return false;
}
console.log(isVietnamWin());
