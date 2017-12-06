$(document).ready(function(){
    var model = {
        pics: [
            {
                name: "Pic 1",
                src: "fitness.jpg",
                counter: 0
            },
            {
                name: "Pic 2",
                src: "fitness2.jpeg",
                counter: 0
            },
            {
                name: "Pic 3",
                src: "fitness3.jpg",
                counter: 0
            },
            {
                name: "Pic 4",
                src: "fitness4.jpeg",
                counter: 0
            },
            {
                name: "Pic 5",
                src: "fitness5.jpg",
                counter: 0
            }
        ],
        currentPic: [
            {
                name: "Pic Hien Tai",
                src: "fitness.jpg",
                counter: 0
            }
        ]
    }

    var controller = {
        getListNames: function(){
            var picList = [];
            for(var i = 0;i<model.pics.length;i++){
                picList.push(model.pics[i].name);
            }
            return picList;
        },
        batdau: function(){
            view.khoitao();
        }
    }

    var view = {
        khoitao: function(){
            this.picListName = controller.getListNames();
            view.hienthi();
        },
        hienthi: function(){
            var html = "";
            for(var i =0;i<this.picListName.length;i++){
                html += "<li>" + this.picListName[i] + "</li>";
            }
            $("#child-menu").html(html);
            console.log(html);
        }
    }

    controller.batdau();
})