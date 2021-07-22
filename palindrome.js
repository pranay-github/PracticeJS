function palindrome(str1) {
    if (str1.length === 1) return true;
    if (str1.length === 2) return str1[0] === str1[1];
    if (str1[0] === str1.slice(-1)) {
        return palindrome(str1.slice(1,-1));
    }
    return false;
}

console.log(palindrome('tacocat'));