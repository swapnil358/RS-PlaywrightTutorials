function removeDuplicates(str) {

    let result = "";

    for (let ch of str) {

        if (!result.includes(ch)) {
            result += ch;
        }
    }

    return result;
}

console.log(removeDuplicates("programming"));

console.log("******* JavaScript built-in approach ***********");

function removeDuplicates1(str) {
    return [...new Set(str)].join("");
}

console.log(removeDuplicates1("programming"));

console.log("***** Traditional approach ******");
