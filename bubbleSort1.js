function bubbleSort(arr1) {
    let hasNoSwap;
    for (let i=arr1.length; i > 0; i--) {
        hasNoSwap = true;
        for (let j = 0; j< i-1; j++) {
            if (arr1[j] > arr1[j+1]) {
                [arr1[j], arr1[j+1]] = [arr1[j+1], arr1[j]]
                // let temp = arr1[j];
                // arr1[j] = arr1[j+1];
                // arr1[j+1] = temp;
                hasNoSwap = false;
            }
        }
        if (hasNoSwap) { break;}
    }
    return arr1;
}

console.log(bubbleSort([37, 45, 29,8]));