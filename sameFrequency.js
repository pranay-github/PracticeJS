function sameFrequency(a, b){
    // good luck. Add any arguments you deem necessary.
     if (a.toString().length !== b.toString().length) { return false;}
    let arr1 = a.toString().split('');
    let arr2 = b.toString().split('');
    let obj1 = {};

    for (let i=0; i< arr1.length; i++) {
        obj1[arr1[i]] = (obj1[arr1[i]] || 0) + 1;
    }

    for (let i of arr2) {
        if (obj1[i]) {
            obj1[i] = obj1[i] - 1;
        } else {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency(23,34));