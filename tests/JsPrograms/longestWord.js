function longestWord(str) {

    let words = str.split(" ");
    let longest = "";

    for (let word of words) {

        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("JavaScript automation framework"));

console.log("****** JavaScript built-in approach *********");

function longestWord(str) {

    return str
        .split(/\s+/)
        .reduce((longest, word) =>
            word.length > longest.length
                ? word
                : longest
        );
}

console.log(longestWord("JavaScript automation framework"));

console.log("****** Another JavaScript built-in approach *********");

function longestWord(str) {

    return str
        .split(/\s+/)
        .sort((a, b) => b.length - a.length)[0];
}

console.log(longestWord("JavaScript automation framework"));