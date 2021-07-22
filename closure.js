
/**CLOSURE */
let add = (() => {
    let count = 0;

    return () => {
        count++;
        return count;
    }
})();
console.log(add());

/** Function Currying Approach 1 */
function sum() {
    let args1 = [...arguments];
    function result() {
        let args2 = [...arguments];
        return sum(...args1,...args2);
    }
    let total = args1.reduce((a,b) => a+b);
    result.value = total;

    return result;
}

console.log(sum(2)(3)(4).value);

/** Function Currying Approach 2*/

function curry(fn) {
    var args = Array.prototype.slice.call(arguments, 1);

    return function () {
        return fn.apply(this, args.concat(
                Array.prototype.slice.call(arguments)
        ));
    }
}

function sumOfIntegers() {
    var args = Array.prototype.slice.call(arguments);

    return args.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    });
}

let curry1 = curry(sumOfIntegers, 1);

console.log(curry1(2,3,4));