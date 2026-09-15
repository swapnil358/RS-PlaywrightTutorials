function removeDuplicates(arr) {

    const result = [];

    for (const num of arr) {

        if (!result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log("****** JavaScript built-in approach *********");

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));