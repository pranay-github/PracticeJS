function search(arr1, val) {
    let min = 0;
    let max = arr1.length - 1;

    while( min <= max) {
        let midIndex = Math.floor((min + max)/2);
        if (val < arr1[midIndex]) {
            max = midIndex - 1;
        } else if (val > arr1[midIndex]) {
            min = midIndex + 1;
        } else {
            return midIndex;
        }
    }
    return -1;
}

console.log(search([1,2,4,6,7,11,23], 23))