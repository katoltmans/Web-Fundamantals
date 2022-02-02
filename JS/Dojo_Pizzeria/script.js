//Dojo Pizzeria - create a function to create random pizzas

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza1 = {
        crustType: "deep dish",
        sauceType: "traditional",
        cheeses: "mozzerella",
        toppings: ["pepperoni", "sausage"]
    };
    var pizza2 = {
        crustType: "hand tossed",
        sauceType: "marinara",
        cheeses: ["mozzerella", "feta"],
        toppings: ["mushrooms", "olives", "onions"]
    };
    var pizza3 = {
        crustType: "hand tossed",
        sauceType: "spicy red",
        cheeses: ["mozzerella", "parmesan"],
        toppings: ["pepperoni", "green peppers", "olives", "mushrooms"]
    };
    var pizza4 = {
        crustType: "stuffed",
        sauceType: "traditional",
        cheeses: "barbeque",
        toppings: ["canadian bacon", "pinapple"]
    };
    
    console.log(pizza1);
    console.log(pizza2);
    console.log(pizza3);
    console.log(pizza4);
}

pizzaOven();
