//Always Hungry - "food" will console log "yummy" - console.log "I'm hungry" if no food present
// console.log("Always Hungry")
// function alwaysHungry(arr) {
//     var foodFound = false;
//     for(i=0; i<arr.length; i++) {
//         if(arr[i]=="food") {
//             console.log("yummy");
//             foodFound = true;
//         }
//     } 
//     if(foodFound == false) {
//         console.log("I'm hungry")
//     }
// }
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"
// console.log();

//High Pass Filter - return only values larger than cutoff value
// console.log("High Pass");
// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for(i=0; i<arr.length; i++){
//         if(arr[i]>cutoff) {
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]
// console.log();

//Better Than Average - count the numbers larger than the average in any given array
// console.log("Better Than Average")
// function betterThanAverage(arr) {
//     var sum = 0;
//     for(i=0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     var average = sum/2;
//     var count = 0
//     for(i=0; i<arr.length; i++) {
//         if(arr[i]>average){
//             count++;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4
// console.log();

//Array Reverse - reverse the values in an array and return them
console.log("Array Reverse")
function reverse(arr) {
    var temp = [];
    i=0;
    while(i<arr.length) {
        temp.unshift(arr[i])
        i++;
    }
    arr = temp;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//Fibonacci Array - return an array of fibonacci numbers up to given length n
console.log("Fibonacci Array")
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


