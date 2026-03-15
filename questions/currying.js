/*************************************************
 * 5. CURRYING
 * -----------------------------------------------
 * Definition:
 * Currying transforms a function with multiple
 * arguments into a sequence of functions each
 * taking one argument.
 *
 * Why it is used:
 * - Function reuse
 * - Functional programming
 *************************************************/

// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const double = multiply(2);

// console.log(double(5)); // 10

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiply(2);

console.log(double(10));

const fn = a => b => c => {
    return a * b - c
}
console.log(fn(2)(3)(5));


function fnA(a){
    return function fnB(b){
        return function fnC(c){
            return a * b - c;
        }
    }
}

console.log('currying in normal function ->', fnA(2)(3)(5));