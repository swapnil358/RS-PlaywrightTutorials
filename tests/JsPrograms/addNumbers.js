function addNumbers(str) {

    let sum = 0;
    let number = "";

    for (let ch of str) {

        if (ch >= "0" && ch <= "9") {
            number += ch;
        } else {

            if (number !== "") {
                sum += Number(number);
                number = "";
            }
        }
    }

    // Handle number at the end
    if (number !== "") {
        sum += Number(number);
    }

    return sum;
}

console.log(addNumbers("abc12xyz34"));

console.log("****** JavaScript built-in approach *********");
function addNumbers1(str) {

    const numbers = str.match(/\d+/g) || [];

    return numbers.reduce(
        (sum, num) => sum + Number(num),
        0
    );
}

console.log(addNumbers1("abc12xyz34"));