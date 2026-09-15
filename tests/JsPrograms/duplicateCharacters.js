function duplicateCharacters(str) {
    let count = {};
    let result = [];

    for (let ch of str) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let ch of str) {
        if (count[ch] > 1 && !result.includes(ch)) {
            result.push(ch);
        }
    }

    return result;
}

console.log(duplicateCharacters("programming"));

console.log("*********** JavaScript built-in approach ***************");

function duplicateCharacters1(str) {
    const chars = str.split("");

    return [...new Set(
        chars.filter(ch => chars.indexOf(ch) !== chars.lastIndexOf(ch))
    )];
}

console.log(duplicateCharacters1("programming"));

console.log("************ Optimized traditional approach *************");
function duplicateCharacters2(str) {
    const map = new Map();
    const result = [];

    for (const ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (const [ch, count] of map) {
        if (count > 1) {
            result.push(ch);
        }
    }

    return result;
}

duplicateCharacters2("maharaja")