function reverse(str1) {
    if (str1.length === 1) { return str1;}

    return str1.slice(str1.length - 1) + reverse(str1.slice(0, str1.length - 1))
}

console.log(reverse('awesome'));