function capitalizeWords (arr1) {
    if (arr1.length === 1) {
        return [arr1[0].toUpperCase()];
    }

    let result = capitalizeWords(arr1.slice(0, -1));
    result.push(arr1.slice(arr1.length - 1)[0].toUpperCase());
    return result;
    // add whatever parameters you deem necessary - good luck!
}
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words))