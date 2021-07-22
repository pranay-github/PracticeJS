function areThereDuplicates(...args) {
    let i = 0;
    let j = i + 1;

    while (j < args.length) {
        if (args[i] !== args[j]) {
            i++;
            j++;
        } else {
            return true
        }
    }
   return false;
}

console.log(areThereDuplicates(1,2,6));