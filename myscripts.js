// var generateBtn = document.getElementById("generate-btn");
var text = document.getElementById("text");


// var mainfunction = document.getElementById("geeks");
function generateBtn(){
    var pass="";
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz0123456789'+'!@#$%^&*+';
    for (let i=1; i<=10;i++){
        var char = Math.floor(Math.random()*str.length + 1);
        pass = pass + str.charAt(char)
    }
    return pass;
}

function btnClick(){
    text.innerHTML = generateBtn();
    text.style.border = '1px solid black';
}