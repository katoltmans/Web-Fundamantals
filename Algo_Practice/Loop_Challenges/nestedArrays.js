var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
];

// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// Nesting Arrays challenge
let isPresent = false;
function isPresent2d(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        for (var n = 0; n < arr[i].length; n++) {
            if (arr[i][n] == value) {
                isPresent = true;
            }
        }
    }
    if (isPresent == true) {
        console.log("true");
    } else {
        console.log("false");
    }
    return isPresent;
}

isPresent2d(arr2d, 6);
isPresent2d(arr2d, 9);

// Flatten Array challenge
// complete the following function
function flatten(arr) {
    var flat = [];
    for (var i = 0; i < arr.length; i++) {
        for (var n = 0; n < arr[i].length; n++) {
            flat.push(arr[i][n]);
        }
    }
    return flat;
}

var result = flatten([
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

isPresent2d(result, 6);
isPresent2d(result, 9);
