function power(val, pow) {
    if (pow === 0) return 1;

    return val * power(val, pow-1);
}

console.log(power(3, 3));

        
               