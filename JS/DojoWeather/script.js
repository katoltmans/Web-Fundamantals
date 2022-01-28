function alertMsg(element) {
    alert("Loading weather report...");
}

function removeAlert(id) {
    element = document.getElementById(id).remove();
}

function convertDegree (element, convert) {
    console.log("hi");
    var tempArray = document.querySelectorAll(convert);
    for(var i=0; i < tempArray.length; i++) {
        var number = parseInt(tempArray[i].innerText);
        if (element.value == "celsius") {
            celsius = (number-32)*(5/9);
            celsius = Math.round(celsius);
            tempArray[i].innerText = celsius
            console.log(celsius);
            }
        else {
            fahrenheit = (number*(9/5) + 32);
            fahrenheit = Math.round(fahrenheit);
            tempArray[i].innerText = fahrenheit
            console.log(fahrenheit);
            }
    }

}
