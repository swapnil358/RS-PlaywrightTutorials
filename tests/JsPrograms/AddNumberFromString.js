let str = "My142Love786";

let updatedStr = str.replace(/[aA-zZ]/g, " ");

console.log(updatedStr);

let splt = updatedStr.split(" ");

console.log(splt);

let sum = 0;

for (let string of splt) {
    if (/^[0-9]+$/.test(string)) {
        let i = parseInt(string);

        sum = sum + i;
    }
}

console.log("Addition of the numbers from the String: " + sum);