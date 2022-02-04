//calculate result
var result = 0;
var operator = "+";
var numLeft = 0;
var numRight = 0;

function press(num) {
    if(operator == "+") {
        result += num;
    }
    else if(operator == "-") {
        result -= num;
    }
    else if(operator == "*") {
        result *= num;
    }
    else if(operator == "/") {
        result /= num;
    }
    
    document.getElementById("display").innerText = result;
}

function setOP(op) {
    operator = op;
}