function nextGreatest(arr1) {
    // let arr2 = [];
    // arr1.forEach((val, index, arr) => {
    //     const arr3 = arr.slice(index,arr1.length);
    //     const next = arr3.find((v) => {
    //         if (v > val) {
    //             return v;
    //         }
    //     });
    //     if (!next) {
    //         arr2.push(-1);
    //     } else {
    //         arr2.push(next);
    //     }
    // });

    let i = 0;
    let j = i;
    let arr2 = [];
    while (i < arr1.length) {
        if (arr1[i] < arr1[j] && j < arr1.length) {
            arr2.push(arr1[j]);
            i++;
            j = i;
        } else if (j >= arr1.length) {
            arr2.push(-1);
            i++;
            j = i;
        } else {
            j++;
        }

    }
    return arr2;
}

console.log(nextGreatest([1,3,2,5]));