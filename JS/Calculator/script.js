//calculate result
var result = 0;
var numLeft = "";
var numRight = "";
var operatorPress = false;
var operator = "";

function press(num) {
    if(operatorPress == true) {
        numRight += num;
        document.getElementById("display").innerText = numRight;
    }
    else{
        numLeft += num;
        document.getElementById("display").innerText = numLeft;
    }
}

function setOP(op) {
    operatorPress = true;
    operator = op;
}

function clr() {
    result = 0;
    numLeft = "";
    numRight = "";
    operatorPress = false;
    operator = "";
    document.getElementById("display").innerText = result;
}

function calculate () {
    if(operator == "+") {
        result = parseFloat(numLeft) + parseFloat(numRight);
    }
    else if(operator == "-") {
        result = parseFloat(numLeft) - parseFloat(numRight);
    }
    else if(operator == "*") {
        result = parseFloat(numLeft) * parseFloat(numRight);
    }
    else if(operator == "/") {
        result = parseFloat(numLeft) / parseFloat(numRight);
    }
    
    document.getElementById("display").innerText = result;
}