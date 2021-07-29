function someRecursive(arr1, isOdd){
    if (arr1.length === 0) {return false;}
    if (isOdd.call(this, arr1[0])) return true;
    return someRecursive(arr1.slice(1), isOdd);
    // add whatever parameters you deem necessary - good luck!
}
function isOdd(val) {
    if (val % 2 === 0) {
        return false;
    }
    return true;
}
console.log(someRecursive([1,2,3,4], isOdd));