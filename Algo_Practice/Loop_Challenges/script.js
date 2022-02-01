//Print odds
console.log("Print Odds");
for(i=0; i<=20; i++) {
    if(i%2 != 0){
        console.log(i);
    }
}

//Decrease multiples of 3
console.log("Decreasing Multiples of 3");
for(i=100; i>=0; i--) {
    if(i%3==0) {
        console.log(i);
    }
}

//Print a specified sequence of numbers
console.log("Print the Sequence");
var array = [4, 2.5, 1, -0.5, -2, -3.5]
for(i=0; i<array.length; i++) {
    console.log(array[i]);
}

//Sigma - find sum of all numbers 1-100 (result should be 5050)

console.log("Sigma");
var sum = 0;
for(i=1; i<=100; i++) {
    sum+=i;
}
console.log(sum);


//Factorial - multiply values of all numbers 1-12 (result should be 479001600)

console.log("Factorial");
var product = 1;
for(i=1; i<=12; i++) {
    product*=i;
}
console.log(product);