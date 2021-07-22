function collectOddValues(arr1) {
    let result = [];

    if (arr1.length === 0) {return result;}

    if (arr1[0] % 2 !== 0) {
        result.push(arr1[0]);
    }

    return result.concat(collectOddValues(arr1.slice(1)));
}

console.log(collectOddValues([1,2,3,4,5,6,7]));