function add() {
    var args = [...arguments];
    function addReturn() {
        var args1 = [...arguments];
        return add(...args, ...args1);
    }
    let total = args.reduce((a,b) => a + b);
    addReturn.value = total;
    return addReturn;
};


console.log(add(1)(2)(4)(5)(6).value);
