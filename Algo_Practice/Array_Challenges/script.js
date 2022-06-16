//Always Hungry - "food" will console log "yummy" - console.log "I'm hungry" if no food present
console.log("Always Hungry");
function alwaysHungry(arr) {
    var foodFound = false;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            foodFound = true;
        }
    }
    if (foodFound == false) {
        console.log("I'm hungry");
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
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
console.log();

//Better Than Average - count the numbers larger than the average in any given array
console.log("Better Than Average");
function betterThanAverage(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;
    var count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
console.log();

//Array Reverse - reverse the values in an array and return them
console.log("Array Reverse");
function reverse(arr) {
    var temp = 0;
    i = 0;
    while (i < arr.length / 2) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        i++;
    }
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
console.log();

//Fibonacci Array - return an array of fibonacci numbers up to given length n
console.log("Fibonacci Array");
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var num1 = 0;
    var num2 = 1;
    for (i = 0; i < n - 2; i++) {
        var sum = fibArr[num1] + fibArr[num2];
        fibArr.push(sum);
        num1++;
        num2++;
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//Write a function to reverse an array with a for loop
console.log("Reverse Array");
function reverse_array(arr) {
    var temp = 0;
    for (i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}
var revarr = reverse_array(["l", "m", "n", "o", "p"]);
console.log(revarr); //expected result ["p", "o", "n", "m", "l"]

//Write a function that returns a random number between 1 and 6
console.log("Dice Roller");
function d6() {
    var diceArr = [1, 2, 3, 4, 5, 6];
    var roll = diceArr[Math.floor(Math.random() * diceArr.length)];
    return roll;
}

var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

//Write a function that returns a random life answer
console.log("Oracle");
function oracle(arr) {
    var answer = arr[Math.floor(Math.random() * arr.length)];
    return answer;
}
var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
];

lifeAnswer = oracle(lifesAnswers);
console.log("Your answer is: " + lifeAnswer);
console.log();

function removeNegatives(arr) {
    let count = 0;
    let temp = 1;
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            arr[i] = arr[arr.length - 1];
            arr.length--;
        }
    }
    return arr;
}

console.log(removeNegatives([-1, 4, -7, 65, 299, -3]));
