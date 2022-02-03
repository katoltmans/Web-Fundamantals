//Dojo Pizzeria - create a function to create random pizzas

// function pizzaOven(crustType, sauceType, cheeses, toppings) {
//     var pizza1 = {
//         crustType: "deep dish",
//         sauceType: "traditional",
//         cheeses: "mozzerella",
//         toppings: ["pepperoni", "sausage"]
//     };
//     var pizza2 = {
//         crustType: "hand tossed",
//         sauceType: "marinara",
//         cheeses: ["mozzerella", "feta"],
//         toppings: ["mushrooms", "olives", "onions"]
//     };
//     var pizza3 = {
//         crustType: "hand tossed",
//         sauceType: "spicy red",
//         cheeses: ["mozzerella", "parmesan"],
//         toppings: ["pepperoni", "green peppers", "olives", "mushrooms"]
//     };
//     var pizza4 = {
//         crustType: "stuffed",
//         sauceType: "traditional",
//         cheeses: "barbeque",
//         toppings: ["canadian bacon", "pinapple"]
//     };
    
//     console.log(pizza1);
//     console.log(pizza2);
//     console.log(pizza3);
//     console.log(pizza4);
// }

// pizzaOven();

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", "mozzerella", ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzerella", "feta"], ["mushrooms", "olives", "onions"]);
var p3 = pizzaOven("hand tossed", "spicy red", ["mozzerella", "parmesan"], ["pepperoni", "green peppers", "olives", "mushrooms"]);
var p4 = pizzaOven("stuffed", "traditional", "barbeque", ["canadian bacon", "pinapple"]);

console.log(p3);

function randomPizza() {
    var myCrusts = ["deepdish", "hand tossed", "stuffed", "thin"];
    var mySauces = ["traditional", "marinara" , "spicy red", "traditional"];
    var myCheeses = ["mozzerella", "feta" , "parmesan"];
    var myToppings = ["pepperoni", "sausage" , "mushrooms", "olives", "onions", "green peppers" , "canadian bacon", "pinapple"];

    var newPizza = [
        myCrusts[Math.floor(Math.random() * myCrusts.length)],
        mySauces[Math.floor(Math.random() * mySauces.length)],
        myCheeses[Math.floor(Math.random() * myCheeses.length)],
        myToppings[Math.floor(Math.random() * myToppings.length)]
    ]
    console.log(newPizza);
    return newPizza;
}

randomPizza();
