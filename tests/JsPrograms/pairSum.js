function pairSum(arr, target) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === target) {
                return [arr[i], arr[j]];
            }
        }
    }

    return [];
}

console.log(pairSum([2, 7, 11, 15], 9));


console.log("***** optimized approach *******");
function pairSum(arr, target) {

    const seen = new Set();

    for (const num of arr) {

        const complement = target - num;

        if (seen.has(complement)) {
            return [complement, num];
        }

        seen.add(num);
    }

    return [];
}

console.log(pairSum([2, 7, 11, 15], 9));