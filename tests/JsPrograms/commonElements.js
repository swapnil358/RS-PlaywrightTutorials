function commonElements(arr1, arr2) {

    const result = [];

    for (const num1 of arr1) {

        for (const num2 of arr2) {

            if (num1 === num2 &&
                !result.includes(num1)) {

                result.push(num1);
            }
        }
    }

    return result;
}

console.log(
    commonElements(
        [1, 2, 3, 4, 5],
        [3, 4, 5, 6, 7]
    )
);

console.log("****** JavaScript built-in approach *********");

function commonElements(arr1, arr2) {

    return [
        ...new Set(
            arr1.filter(num => arr2.includes(num))
        )
    ];
}

console.log(
    commonElements(
        [1, 2, 3, 4, 5],
        [3, 4, 5, 6, 7]
    )
);

console.log("***** Optimized approach ****");
function commonElements(arr1, arr2) {

    const set2 = new Set(arr2);
    const result = new Set();

    for (const num of arr1) {
        if (set2.has(num)) {
            result.add(num);
        }
    }

    return [...result];
}


