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

function isPresent2d(arr, value) {
    let isPresent = false;
    //console.log(isPresent);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == value) {
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
        for (var j = 0; j < arr[i].length; j++) {
            flat.push(arr[i][j]);
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
