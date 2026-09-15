function largestNumber(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(largestNumber([10, 25, 5, 40, 30]));

console.log("****** JavaScript built-in approach *********");

function largestNumber(arr) {
    return Math.max(...arr);
}

console.log(largestNumber([10, 25, 5, 40, 30]));