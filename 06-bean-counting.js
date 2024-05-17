'use strict'
console.log(Object.prototype.toString());
const countChar = (str,characterToCount) => str.split('').filter(char => char === characterToCount).length;
console.log(countChar("BBC","B"))

console.log(countChar("kakkerlak","k"))

