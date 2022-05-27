//Object Practice
var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"],
};

// access the name using the monster variable
console.log(monster.name);

// access the 2nd type using the monster variable
console.log(monster.types[1]);

//Arrays of Objects Practice
var pokémon = [
    { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
    { id: 5, name: "Charmeleon", types: ["fire"] },
    { id: 9, name: "Blastoise", types: ["water"] },
    { id: 12, name: "Butterfree", types: ["bug", "flying"] },
    { id: 16, name: "Pidgey", types: ["normal", "flying"] },
    { id: 23, name: "Ekans", types: ["poison"] },
    { id: 24, name: "Arbok", types: ["poison"] },
    { id: 25, name: "Pikachu", types: ["electric"] },
    { id: 37, name: "Vulpix", types: ["fire"] },
    { id: 52, name: "Meowth", types: ["normal"] },
    { id: 63, name: "Abra", types: ["psychic"] },
    { id: 67, name: "Machamp", types: ["fighting"] },
    { id: 72, name: "Tentacool", types: ["water", "poison"] },
    { id: 74, name: "Geodude", types: ["rock", "ground"] },
    { id: 87, name: "Dewgong", types: ["water", "ice"] },
    { id: 98, name: "Krabby", types: ["water"] },
    { id: 115, name: "Kangaskhan", types: ["normal"] },
    { id: 122, name: "Mr. Mime", types: ["psychic"] },
    { id: 133, name: "Eevee", types: ["normal"] },
    { id: 144, name: "Articuno", types: ["ice", "flying"] },
    { id: 145, name: "Zapdos", types: ["electric", "flying"] },
    { id: 146, name: "Moltres", types: ["fire", "flying"] },
    { id: 148, name: "Dragonair", types: ["dragon"] },
];

// display names of pokémon greater than 99
console.log();
console.log("GREATER THAN 99");
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id > 99) {
        console.log(pokémon[i].name);
    }
}

// display objects whose id is evenly divisible by 3
console.log();
console.log("ID DIVISIBLE BY 3");
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].id % 3 == 0) {
        console.log(pokémon[i].name);
    }
}

// display objects that have more than one type
console.log();
console.log("MORE THAN ONE TYPE");
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[1] != null) {
        console.log(pokémon[i].name);
    }
}

// display poison pokémon
console.log();
console.log("POISON ONLY POKEMON");
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[0] == "poison" && pokémon[i].types[1] == null) {
        console.log(pokémon[i].name);
    }
}

// display pokemon whose second type is flying
console.log();
console.log("SECOND TYPE IS FLYING");
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[1] === "flying") {
        console.log(pokémon[i].types[0]);
    }
}

// reverse the names of pokémon whose only type is poison
console.log();
console.log("REVERSED POISON ONLY");
let poisonArray = [];
for (var i = 0; i < pokémon.length; i++) {
    if (pokémon[i].types[0] == "poison" && pokémon[i].types[1] == null) {
        poisonArray.push(pokémon[i].name);
    }
}
let revPoisonArray = poisonArray.reverse();
console.log(revPoisonArray);

// reverse array alternate method
// console.log();
// let reversedKeys = Object.keys(pokémon).reverse();
// reversedKeys.forEach((key) => {
//     if (
//         reversedKeys[i].pokémon.types[0] == "poison" &&
//         reversed[i].pokémon.types[1] == null
//     ) {
//         console.log(reversedKeys[i].pokémon.name);
//     }
// });
