function stringifyNumbers(obj) {
    let result = {};
    for (let i in obj) {
        if (typeof(obj[i]) === 'object' && !Array.isArray(obj[i])) {
            result[i] = stringifyNumbers(obj[i]);
        } else if (typeof(obj[i]) === 'number') {
                result[i] = obj[i].toString();
        } else {
            result[i] = obj[i];
        }
    }
    return result;
}
let obj1 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj1));