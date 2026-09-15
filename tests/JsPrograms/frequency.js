function frequency(arr) {

    const count = {};

    for (const num of arr) {

        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    return count;
}

console.log(
    frequency([1, 2, 2, 3, 3, 3, 4])
);


console.log("****** JavaScript built-in approach *********");

function frequency(arr) {

    return arr.reduce((count, num) => {

        count[num] = (count[num] || 0) + 1;

        return count;

    }, {});
}

console.log(
    frequency([1, 2, 2, 3, 3, 3, 4])
);


console.log("***** Map version *******");
function frequency(arr) {

    const map = new Map();

    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    return map;
}