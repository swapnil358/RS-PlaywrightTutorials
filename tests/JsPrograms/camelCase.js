function camelCase(str) {

    let words = str.split(" ");
    let result = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {

        result +=
            words[i][0].toUpperCase() +
            words[i].slice(1).toLowerCase();
    }

    return result;
}

console.log(camelCase("hello world test"));

console.log("****** JavaScript built-in approach *********");

function camelCase(str) {

    return str
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map((word, index) =>
            index === 0
                ? word
                : word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}

console.log(camelCase("hello world test"));

console.log("******* PascalCase Traditional **************");
function pascalCase(str) {

    let words = str.split(" ");
    let result = "";

    for (let word of words) {

        result +=
            word[0].toUpperCase() +
            word.slice(1).toLowerCase();
    }

    return result;
}

console.log(pascalCase("hello world test"));


console.log("****** JavaScript built-in approach *********");

function pascalCase(str) {

    return str
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(word =>
            word[0].toUpperCase() + word.slice(1)
        )
        .join("");
}

console.log(pascalCase("hello world test"));