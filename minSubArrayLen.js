function minSubArrayLen(arr1, result) {
    let i = 0;
    let j = 0;
    let total = 0;
    let minLen = Infinity;

    while (i < arr1.length) {
        if (total < result && j < arr1.length) {
            total = total + arr1[j];
            j++;
        } else if (total >= result) {
            total =  total - arr1[i];
            minLen = Math.min(minLen, j-i);
            i++;
        } else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));