function maxSubArray(arr1, n) {
    //loop through array/ use while i< arr1.length
    // should consider n elements at a time
    let maxSum = 0;
    for (let k = 0; k < n; k++) {
        maxSum = maxSum + arr1[k];
    }

    let i = 0;
    let j = n;
    let result = maxSum;
    while (j < arr1.length) {
        maxSum = maxSum - arr1[i] + arr1[j];

        result = Math.max(result, maxSum)
        j++;
        i++;
    }
   return result;
}

console.log(maxSubArray([4,2,1,6], 1));