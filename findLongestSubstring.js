function findLongestSubstring(arr1) {
    let i = 0;
    let obj1 = {};
    let maxCount = 0;
    let start = 0
    while (i< arr1.length) {
        if (obj1[arr1[i]]) {
          start = Math.max(start, obj1[arr1[i]])
        }
        maxCount = Math.max(maxCount, i - start + 1);
        obj1[arr1[i]] = i + 1;
        i++;
    }

    return maxCount;
}

console.log(findLongestSubstring('rithmschool'));