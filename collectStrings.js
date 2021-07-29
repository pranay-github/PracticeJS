const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}
function collectStrings(obj) {
    let arr1 = [];
    for (let i in obj) {
        if (typeof(obj[i]) === 'object') {
            arr1 = arr1.concat(collectStrings(obj[i]));
        } else if (typeof(obj[i]) === 'string') {
            arr1 = arr1.concat(obj[i]);
        }
    }
    return arr1;
}
console.log(collectStrings(obj1));