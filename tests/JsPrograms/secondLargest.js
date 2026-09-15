function secondLargest(arr) {

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {

        if (num > largest) {
            secondLargest = largest;
            largest = num;
        }
        else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest;
}

console.log(secondLargest([10, 25, 5, 40, 30]));

console.log("****** JavaScript built-in approach *********");

function secondLargest(arr) {

    const unique = [...new Set(arr)];

    unique.sort((a, b) => b - a);

    return unique[1];
}

console.log(secondLargest([10, 25, 5, 40, 30]));