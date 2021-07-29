function flatten(arr1){
    var arr2 = [];
    for (var i = 0; i< arr1.length; i++) {
        if (Array.isArray(arr1[i])) {
            arr2 = arr2.concat(flatten(arr1[i]));
        } else {
            arr2.push(arr1[i])
        }
    }
    return arr2;
    // add whatever parameters you deem necessary - good luck!
}

console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));