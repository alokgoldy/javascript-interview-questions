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