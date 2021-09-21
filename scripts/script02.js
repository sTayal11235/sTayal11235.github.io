var git = document.getElementById("git");
var insta = document.getElementById("insta");
var codechef = document.getElementById("codechef");
var lnkedin = document.getElementById("lnkdin");
var gmail = document.getElementById("gmail");


function display(ele){
    document.getElementById("cntr").innerHTML = `<img id = "hovimg" src = "${ele.src}"}>`;
    centerImgCss();
}

function Remove() {
    document.getElementById("hovimg").remove();
}

function centerImgCss(){
    document.getElementById("hovimg").style.height = "15vw";
    document.getElementById("hovimg").style.width = "15vw";
    document.getElementById("hovimg").style.border = "1px solid";
    document.getElementById("hovimg").style.borderColor = "transparent";
    document.getElementById("hovimg").style.borderRadius = "50%";
}