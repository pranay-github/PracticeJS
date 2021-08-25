function binarySearch(arr1, num) {
    let left = 0,
    right = arr1.length,
    middle = Math.floor((left + right) / 2);
    while (left <= right) {
        if (num < arr1[middle]) {
            right = middle - 1;
            middle = Math.floor((left + right) / 2);
        } else if (num > arr1[middle]) {
            left = middle + 1;
            middle = Math.floor((left + right) / 2);
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(binarySearch([2,5,6,77,82,91], 82))