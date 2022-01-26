console.log("page loaded...");

function startPreview(element) {
    element.play();
    element.setAttribute("controls", "");
}

function stopPreview(element) {
    element.pause();
    element.removeAttribute("controls");
}
