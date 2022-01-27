function removeUser(id){
    document.getElementById(id).remove();
    var conRequestCount = document.getElementById("conReqCount").innerText;
    parseInt(conRequestCount);
    conRequestCount--;
    document.getElementById("conReqCount").innerText = conRequestCount;
}

function addConnection(id){
    var friendCount = document.getElementById("friendCount").innerText;
    parseInt(friendCount);
    friendCount++;
    document.getElementById("friendCount").innerText = friendCount;
    removeUser(id);
}

function editName(){
    document.getElementById("userName").innerText = "Santa Klaus";
}