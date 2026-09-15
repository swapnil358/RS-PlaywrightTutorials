function isAnagram(str1, str2) {

    if (str1.length !== str2.length) {
        return false;
    }

    let count = {};

    for (let ch of str1) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let ch of str2) {

        if (!count[ch]) {
            return false;
        }

        count[ch]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent"));

console.log("******** JavaScript built-in approach *********");

function isAnagram(str1, str2) {

    return str1
            .split("")
            .sort()
            .join("") ===
        str2
            .split("")
            .sort()
            .join("");
}

console.log(isAnagram("listen", "silent"));

console.log("***** Better version for real interviews *********");
function isAnagram(str1, str2) {

    const normalize = str =>
        str.toLowerCase().replace(/\s/g, "");

    str1 = normalize(str1);
    str2 = normalize(str2);

    if (str1.length !== str2.length) {
        return false;
    }

    const count = {};

    for (const ch of str1) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (const ch of str2) {
        if (!count[ch]) {
            return false;
        }

        count[ch]--;
    }

    return true;
}

console.log(isAnagram("Dormitory", "Dirty Room"));

//For an experienced SDET interview, frequency-map solution is stronger.