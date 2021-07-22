function maxSubarraySum(arr1, num) {
    let i = 0;
    let j = num;
    let maxsum = 0;

    for (let k=0; k<num; k++) {
        maxsum = maxsum + arr1[k];
    }

    let result = maxsum;
    while (j < arr1.length) {
        maxsum = maxsum - arr1[i] + arr1[j];
        i++;
        j++;
        result = Math.max(result, maxsum);
    }
    return result;
}

console.log(maxSubarraySum([100,200,300], 2));