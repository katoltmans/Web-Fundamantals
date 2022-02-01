//Always Hungry - "food" will console log "yummy" - console.log "I'm hungry" if no food present
console.log("Always Hungry")
function alwaysHungry(arr) {
    var foodFound = false;
    for(i=0; i<arr.length; i++) {
        if(arr[i]=="food") {
            console.log("yummy");
            foodFound = true;
        }
    } 
    if(foodFound == false) {
        console.log("I'm hungry")
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
console.log();

//High Pass Filter - return only values larger than cutoff value
console.log("High Pass");
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<arr.length; i++){
        if(arr[i]>cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
console.log();

//Better Than Average - count the numbers larger than the average in any given array
console.log("Better Than Average")
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
console.log();


