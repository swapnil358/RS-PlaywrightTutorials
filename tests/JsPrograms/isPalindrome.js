function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


console.log("********* JavaScript built-in approach **************");

function isPalindrome1(str) {
    return str === str.split("").reverse().join("");
}

console.log(isPalindrome1("madam"));