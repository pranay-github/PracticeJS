function nestedEvenSum(obj) {
    let count = 0;
   for (let i in obj) {
       if (typeof(obj[i]) === 'object' ) {
          count = count + nestedEvenSum(obj[i]);
       } else {
           count = count + ((obj[i] === 2) ? 2 : 0);
       }
   }
   return count;
}
var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
console.log(nestedEvenSum(obj2));