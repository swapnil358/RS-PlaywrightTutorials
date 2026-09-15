function characterCount(str) {
    let count = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (count[ch]) {
            count[ch]++;
        } else {
            count[ch] = 1;
        }
    }

    return count;
}

console.log(characterCount("automation"));


console.log("************** JavaScript built-in approach **********");

function characterCount1(str) {
    return str.split("").reduce((count, ch) => {
        count[ch] = (count[ch] || 0) + 1;
        return count;
    }, {});
}

console.log(characterCount1("automation"));

console.log("********** Using Map ***********");

function characterCount2(str) {
    const map = new Map();

    for (const ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    return map;
}

console.log(characterCount2("automation"));
