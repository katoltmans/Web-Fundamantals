//Fizzbuzz problem - iterate through numbers 1-100
//Numbers divisible by 3 console.log "Fizz"
//Numbers divisible by 5 console.log "Buzz"
//Numbers divisible by both 3 and 5 console.log "FizzBuzz"
//All other numbers print themselves

for(i=1; i<=100; i++) {

    if(i%3==0 && i%5==0) {
        console.log("FizzBuzz")
    }
    else if(i%5==0) {
        console.log("Buzz")
    }
    else if(i%3==0 ) {
        console.log("Fizz")
    }
    else {
        console.log(i)
    }
}