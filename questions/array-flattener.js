function flattenArray(arr) {
  return arr.reduce((acc, crr) => {
    const val = Array.isArray(crr) ? acc.concat(flattenArray(crr)) : acc.concat(crr);
    return val;
  }, [])
}

const myArr = [1, 2, [3, 4, [5, 6]]];

const val = flattenArray(myArr);

console.log('flattenarray->>', val);