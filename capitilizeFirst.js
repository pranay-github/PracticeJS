function capitalizeFirst(array) {
    // add whatever parameters you deem necessary - good luck!
    // for (let i = 0; i<arr1.length; i++) {
    //     arr1[i] = arr1[i][0].toUpperCase() + arr1[i].slice(1,arr1[i].length);
    // }
    // return arr1;
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length - 1)[0].substr(1);
    res.push(string);
    return res;
}

console.log(capitalizeFirst(['car', 'taco', 'banana']));