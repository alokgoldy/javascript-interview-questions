// The splice() method in JavaScript is used to add, remove, or replace elements within an array. 
// Unlike slice(), which creates a shallow copy and does not alter the original array, splice() modifies the original 
// array in place and returns an array containing the removed elements.

const arr1 = [1,2,3,4,5];
const arr2 = [1,2,3,4,5];
const arr3 = [1,2,3,4,5];

// Remove the first two elements

const r1 = arr1.splice(0,2);
console.log('removed r1 -', r1);
console.log('original arr1 -', arr1);

// Remove all elements from index 3 onwards

const r2 = arr2.splice(3);
console.log('removed r2 -', r2);
console.log('original arr2 -', arr2);

// Remove 1 element at index 3, then insert "a", "b", "c" at that position

const r3 = arr3.splice(3, 1, 'a', 'b', 'c');
console.log('removed r3 -', r3);
console.log('original arr3 -', arr3);


// Note:

//     The splice() method modifies the original array.
//     It returns an array containing the elements that were removed (if any).
//     You can use it both to remove and insert elements in a single operation.
