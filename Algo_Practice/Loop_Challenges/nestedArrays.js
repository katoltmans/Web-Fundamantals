var arr2d = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
];

// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

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
isPresent2d(arr2d, 4);
