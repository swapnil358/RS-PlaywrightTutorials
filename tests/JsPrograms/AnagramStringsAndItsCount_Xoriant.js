let arr = ["cat", "atc", "rat", "sat", "cat"];
let count = 0;

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {

        let chars1 = arr[i].split("");
        chars1.sort();

        let chars2 = arr[j].split("");
        chars2.sort();

        console.log("chars2" + chars2);

        if (chars1.join("") === chars2.join("")) {
            count++;
            console.log("Anagram found: " + arr[i] + " and " + arr[j]);
        }
    }
}

console.log("Total number of anagrams: " + count);