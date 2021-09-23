var git = document.getElementById("git");
var insta = document.getElementById("insta");
var codechef = document.getElementById("codechef");
var lnkedin = document.getElementById("lnkdin");
var gmail = document.getElementById("gmail");


function display(ele){
    document.getElementById("cntr").innerHTML = `<img id = "hovimg" src = "${ele.src}" name = "${ele.name}">`;
    centerImgCss();
}

function Remove() {
    var img = document.getElementById("hovimg");
    img.remove();
}

function centerImgCss(){
    var img = document.getElementById("hovimg");
    img.style.position = "absolute";
    img.style.top = "7.75%";
    img.style.left = "7.75%";
    img.style.height = "21vw";
    img.style.width = "21vw";
    img.style.border = "5px";
    img.style.borderStyle = "solid";
    img.style.borderRadius = "50%";
    if(img.name == "git"){
        img.style.borderColor = "whitesmoke";
        img.style.boxShadow = "0px 0px 20px 15px rgba(255, 255, 255, 150)";
    }
    if(img.name == "cf"){
        img.style.borderColor = "white";
        img.style.boxShadow = "0px 0px 30px 15px rgba(170, 235, 255, 150)";
    }
    if(img.name == "insta"){
        img.style.borderColor = "rgb(155, 50, 255)";
        img.style.boxShadow = "0px 0px 30px 15px rgba(155, 50, 255, 150)";
    }
    if(img.name == "lnkdin"){
        img.style.borderColor = "rgb(0, 120, 255)";
        img.style.boxShadow = "0px 0px 30px 15px rgba(0, 120, 255, 150)";
    }
    if(img.name == "gmail"){
        img.style.borderColor = "red";
        img.style.boxShadow = "0px 0px 30px 15px rgba(255, 0, 0, 150)";
    }
}