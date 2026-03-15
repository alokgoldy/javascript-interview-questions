/*************************************************
Memoization (JavaScript)

Memoization is an optimization technique where we store the result of expensive function calls 
and return the cached result when the same inputs occur again.

In simple words:

Memoization avoids recalculating a function if the result was already computed before.

 *************************************************/

const memoizedFunction = (() => {
    const cache = {};
    return (value) => {
        if (value in cache) {
            console.log('from cache')
            return cache[value];
        } else {
            cache[value] = value * 10;
            console.log('from computing')
            return value * 10;
        }
    }
})()

const v1 = memoizedFunction(20);
const v2 = memoizedFunction(20);


function myMemoizedfunction(fn){
    const cache = {};

    return (input) => {
        if(cache[input]){
            return cache[input];
        }
        const value = fn(input);
        cache[input] = value;
        return value;
    }
}

function multiplyWithTwo(input){
    return 2 * input;
}

const mFn = myMemoizedfunction(multiplyWithTwo);

console.log('Answer', mFn(4));