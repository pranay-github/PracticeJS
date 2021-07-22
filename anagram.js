function validAnagram(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let obj1 = {};
    let obj2 = {};
    for (let i of arr1) {
        obj1[i] = (obj1[i] || 0) + 1;
    }

    for (let i of arr2) {
        obj2[i] = (obj2[i] || 0) + 1;
    }

    for (let i in  obj1) {
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }
    return true;
}

//

validAnagram('anagram', 'nagaram');