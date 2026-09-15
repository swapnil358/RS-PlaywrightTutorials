console.log("****** Traditional approach — recursion ******");

function flattenArray(arr) {

    const result = [];

    for (const item of arr) {

        if (Array.isArray(item)) {

            const flattened = flattenArray(item);

            for (const value of flattened) {
                result.push(value);
            }

        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(
    flattenArray([1, [2, 3], [4, [5, 6]]])
);


console.log("****** JavaScript built-in approach *********");

Array.prototype.flat()

const arr = [1, [2, 3], [4, [5, 6]]];

console.log(arr.flat());


const arr = [1, [2, 3], [4, [5, 6]]];

console.log(arr.flat(Infinity));


/*
* Interview question

What is the difference?

arr.flat()

flattens one level.

arr.flat(Infinity)

flattens all nested levels.
* */

