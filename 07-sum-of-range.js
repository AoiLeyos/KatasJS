'use strict'

function range(start,end, step = 1) {
    const result = [];
    if (step > 0) {
    for (let i = start; i <= end; i+= step) {
        result.push(i);}
    } else {
        for (let i = start; i >=end; i +=step)
            result.push(i);
    }
    return result;
}
function sum(array) {
    return array.reduce((a,b) => a + b, 0)
}
console.log(range(1,10));
console.log(range(5,2,-1));
console.log(sum(range(1,10)));
