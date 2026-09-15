function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    }

    return result;
}

console.log(reverseString("Hello World"));

//JavaScript built-in approach

console.log("*******//JavaScript built-in approach  ************")

function reverseString1(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString1("Hello World"));