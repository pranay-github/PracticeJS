function currying() {
    var args = [...arguments];
    function curryingReturn(){
        var args1 = [...arguments];
        return currying(...args, ...args1);
    }
    curryingReturn.value = args.reduce((a, b) => a + b);
    return curryingReturn;
}

console.log(currying(2)(4)(5)(6).value)