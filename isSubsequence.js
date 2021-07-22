function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    let arr1 = str1.split('');
    let arr2 = str2.split('');

    let i = 0;
    let j = 0;

    while (j < arr2.length) {
        if (arr1[i] === arr2[j]) { i++; }
        if (i === arr1.length) { return true;}
        j++;
    }
    return false;
}

console.log(isSubsequence('sing', 'sting'));