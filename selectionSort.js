function selectionSort(arr1) {
    let minimum;
    for (let i = 0; i< arr1.length; i++ ) {
        minimum = i;
        for (let j = i + 1; j< arr1.length; j++) {
            if (arr1[j] < arr1[minimum]) {
                minimum = j;
            }
        }
        if (i !== minimum) {
            [arr1[i], arr1[minimum]] = [arr1[minimum], arr1[i]];
        }
    }
    return arr1;
}

console.log(selectionSort([37, 45, 29, 8]));