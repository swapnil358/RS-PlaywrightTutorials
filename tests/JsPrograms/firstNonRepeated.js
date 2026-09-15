function firstNonRepeated(str) {

    for (let i = 0; i < str.length; i++) {

        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++;
            }
        }

        if (count === 1) {
            return str[i];
        }
    }

    return null;
}

console.log(firstNonRepeated("swiss"));

console.log("************ JavaScript built-in approach *************");
function firstNonRepeated(str) {

    const count = [...str].reduce((map, ch) => {
        map[ch] = (map[ch] || 0) + 1;
        return map;
    }, {});

    return [...str].find(ch => count[ch] === 1) || null;
}

console.log(firstNonRepeated("swiss"));


console.log("********** Best optimized approach ***********");
function firstNonRepeated(str) {

    const map = new Map();

    for (const ch of str) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (const ch of str) {
        if (map.get(ch) === 1) {
            return ch;
        }
    }

    return null;
}

console.log(firstNonRepeated("swiss"));

/*
Interview follow-up

They may ask:

Why not use filter() directly?

Because we need the frequency of every character first, and then we need to preserve the original order to find the first unique character.
* */