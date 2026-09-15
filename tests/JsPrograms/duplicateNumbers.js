function duplicateNumbers(arr) {

    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] === arr[j] &&
                !duplicates.includes(arr[i])) {

                duplicates.push(arr[i]);
            }
        }
    }

    return duplicates;
}

console.log(duplicateNumbers([1, 2, 3, 2, 4, 5, 3, 6]));

console.log("****** JavaScript built-in approach *********");

function duplicateNumbers(arr) {

    return [
        ...new Set(
            arr.filter((num, index) =>
                arr.indexOf(num) !== index
            )
        )
    ];
}

console.log(duplicateNumbers([1, 2, 3, 2, 4, 5, 3, 6]));


console.log("******* Best optimized approach ******");

function duplicateNumbers(arr) {

    const seen = new Set();
    const duplicates = new Set();

    for (const num of arr) {

        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return [...duplicates];
}

