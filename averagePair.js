function averagePair(arr1, val){
    // add whatever parameters you deem necessary - good luck!
    if (arr1.length < 1) { return false;}

    let i = 0;
    let j = arr1.length - 1;

    while (i <= j) {
        let average = (arr1[i] + arr1[j])/2;
        if (average < val) {
            i++;
        } else if (average > val) {
            j--;
        } else {
            return true;
        }
    }
    return false;
}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));