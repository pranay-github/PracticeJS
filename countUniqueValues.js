//Soultion 1
function countUniqueValues(arr1) {
    let i=0;
    let j=1;
    let length1 = arr1.length;

    while(j < length1) {
        if (arr1[i] !== arr1[j]) {
            i++;
            arr1[i] = arr1[j];
        } else {
            j++;
        }
    }
    arr1.length = i + 1;
    return arr1;
}

console.log(countUniqueValues([-2,-1,-1,0,1]));
