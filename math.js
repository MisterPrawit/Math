var showscore = document.getElementById('score');
var showkor = document.getElementById('kor');
var shownum1 = document.getElementById('num1');
var showsymbol = document.getElementById('symbol');
var shownum2 = document.getElementById('num2');
var showanswer = document.getElementById('answer');
var showresult = document.getElementById('result');
var showplus = document.getElementById('plus');
showplus.checked = true;
showsymbol.innerHTML = "+";
var score = 0;
var kor = 0;
var num1 = 0;
var num2= 0;
var total = 0;
showscore.innerHTML = score;
showkor.innerHTML = kor;

function random(){
    showkor.innerHTML=kor;
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);
    shownum1.innerHTML = num1;
    shownum2.innerHTML = num2;
}

function start(){
    random();
    kor = 0;
    score = 0;
    showkor.innerHTML = kor;
    showscore.innerHTML = score;
    showanswer.value = '';
    showsymbol.innerHTML = "+";
}

function btnanswer() {
    checksymbol();
    if (total == showanswer.value){
        showresult.innerHTML = 'ถูกต้อง'
        score += 1;
        showscore.innerHTML = score;
        showanswer.value = '';
    } else {
        showresult.innerHTML = 'ผิด';
        showanswer.value = '';
    }
    kor += 1;
    random();
}

function checksymbol(){
    if (showsymbol.innerHTML == "+"){
        total = num1 + num2;
    } else if (showsymbol.innerHTML == "-"){
        total = num1 - num2;
    } else if (showsymbol.innerHTML == "*"){
        total = num1 * num2;
    } else if (showsymbol.innerHTML == "/"){
        total = num1/num2;
    }
}

function radiosymbol(value){
    showsymbol.innerHTML = value;
}

random();