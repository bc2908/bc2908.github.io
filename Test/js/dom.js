var px;
function changeFontSize(x) {
    var p = document.querySelectorAll("p");
    for (var i = 0; i < p.length; i++) {
        p[i].style.fontSize = x + "px";
    }
    px = x;
}

function increaseFontSize(p) {
    p.style.fontSize = (px + 1) + "px";
}

function decreaseFontSize(p){
    p.style.fontSize = (px - 1) + "px";
}

function changeColor(){
    var p = document.querySelectorAll("p");
    for (var i = 0; i < p.length; i++) {
        switch(i){
            case 0:
                p[i].style.color="blue";
                break;
            case 1:
                p[i].style.color="yellow";
                break;
            case 2:
                p[i].style.color="red";
                break;
        }
    }    
}

function changeBgColor(color){
    var body = document.getElementById("container");
    body.style.backgroundColor=color;
}

function copyContent(p1, p2){
    p1=document.getElementById("p1");
    p2=document.getElementById("p2");
    p1.innerText =  p2.innerText;
}