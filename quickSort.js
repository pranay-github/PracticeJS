function pivot(arr, start = 0, end = arr.length - 1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i=start+1; i< end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
        }
    }
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
    return swapIndex;
}


function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIndex = pivot(arr, start, end);
        quickSort(arr, start, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, end);
    }
    return arr;
}

console.log(quickSort([4,6,9,1,2,5]));