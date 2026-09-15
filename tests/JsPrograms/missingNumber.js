function missingNumber(arr) {

    const n = arr.length + 1;

    for (let i = 1; i <= n; i++) {

        let found = false;

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === i) {
                found = true;
                break;
            }
        }

        if (!found) {
            return i;
        }
    }
}

console.log(missingNumber([1, 2, 3, 5, 6]));

console.log("****** JavaScript built-in approach *********");

function missingNumber(arr) {

    const n = arr.length + 1;

    const expectedSum = n * (n + 1) / 2;

    let actualSum = 0;

    for (let num of arr) {
        actualSum += num;
    }

    return expectedSum - actualSum;
}

console.log(missingNumber([1, 2, 3, 5, 6]));

console.log("****** Another JavaScript built-in approach *********");
function missingNumber(arr) {

    const n = arr.length + 1;

    const expectedSum =
        n * (n + 1) / 2;

    const actualSum =
        arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

console.log(missingNumber([1, 2, 3, 5, 6]));


