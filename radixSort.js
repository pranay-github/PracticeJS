function getDigit(num, i) {
    return Math.floor(Math.abs(num) / (10 ** i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
    let maxDigits = 0;
    for (let i=0; i<arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

function radixSort(arr) {
   let maxDigitCount = mostDigits(arr);
   for (let i=0;i< maxDigitCount; i++) {
       let digitBuckets = Array.from({length: 10}, () => []);
       for (let j=0; j<arr.length; j++) {
           let digit = getDigit(arr[j], i);
           digitBuckets[digit].push(arr[j]);
       }
       arr = [].concat(...digitBuckets);
   }
   return arr;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));