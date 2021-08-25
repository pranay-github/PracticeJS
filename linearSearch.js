function linearSearch(arr1, num) {

    for (let i=0; i< arr1.length; i++) {
        if (arr1[i] === num) {
            return num;
        }
    }
    return -1;
}

console.log(linearSearch([10,15,20,25,30], 15));