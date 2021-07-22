function charCount(inputString) {
    let charList = inputString.split('');
    let obj = {};
    for (let i=0; i<charList.length; i++) {
        obj[charList[i]] = obj[charList[i]] ? (obj[charList[i]] + 1): 1;
    }
    return JSON.stringify(obj);
}

console.log(charCount('aaaa'));