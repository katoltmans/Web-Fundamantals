//calculate result
var result = 0;
var operator = "+";
function press(num) {
    if(operator == "+") {
        result += num;
    }
    document.getElementById("display").innerText = result;
}

function setOP(op) {
    operator = op;
}