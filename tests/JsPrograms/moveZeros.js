function moveZeros(arr) {

    let position = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== 0) {
            arr[position] = arr[i];
            position++;
        }
    }

    while (position < arr.length) {
        arr[position] = 0;
        position++;
    }

    return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12]));

console.log("****** JavaScript built-in approach *********");

function moveZeros(arr) {

    const nonZeros = arr.filter(num => num !== 0);
    const zeros = arr.filter(num => num === 0);

    return [...nonZeros, ...zeros];
}

console.log(moveZeros([0, 1, 0, 3, 12]));

console.log("****** Another JavaScript built-in approach *********");
function moveZeros(arr) {

    return [
        ...arr.filter(num => num !== 0),
        ...arr.filter(num => num === 0)
    ];
}