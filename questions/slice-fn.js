// The slice() method in JavaScript is used to extract a section of an array, returning a new array containing the selected elements. 
// It does not modify the original array. The method takes two arguments:

const arr = [1,2,3,4,5,6];

const a = arr.slice(0,3);
const b = arr.slice(-3);
const c = arr.slice(-4,-1);

console.log('a-', a);
console.log('b-', b);
console.log('c-', c);
console.log('original arr', arr);

// Note:
// The slice() method does not mutate (change) the original array; instead, it returns a new array containing the extracted elements.

