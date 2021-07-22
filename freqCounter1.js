function same(arr1, arr2) {
     if (arr1.length !== arr2.length) {
         return false;
     }
     let counter1 = {};
     let counter2 = {};

     for (let a of arr1) {
         counter1[a] = (counter1[a] || 0) + 1;
     }

     for (let a of arr2) {
        counter2[a] = (counter2[a] || 0) + 1;
    }

    for ( let ctr in counter1) {
        if ( !(counter2.hasOwnProperty(ctr ** 2))) {
            return false;
        }
        if ( counter2[ctr ** 2] !== counter1[ctr]) {
            return false;
        }
    }

    return true;
}

console.log(same([1,2,3,1], [1,4,1,9]));