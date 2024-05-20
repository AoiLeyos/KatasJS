
function reverseArray(arr) {
    return arr.slice().reverse();
}
console.log(reverseArray(["A","B","C"]));



let arrayValue = [1,2,3,4,5];
function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i - 1 ];
        arr[arr.length - i - 1] = temp;
    }
    return arr;
}
reverseArrayInPlace(arrayValue)
console.log(arrayValue);