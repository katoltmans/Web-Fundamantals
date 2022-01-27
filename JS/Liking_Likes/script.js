function addLike(id) {
    var countString = document.querySelector(id).innerText
    parseInt(countString);
    countString++;
    document.querySelector(id).innerText = "" + countString;
    console.log(countString);
}
