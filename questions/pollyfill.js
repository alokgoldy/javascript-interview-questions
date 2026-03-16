// polyfill to create map


const arr = [1, 2, 3];

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this));
        }
        return result;
    }
}

const val = arr.myMap(i => i * 25);

console.log('rsult -> ', val)

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
        const result = [];

        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this))
        }
        return result;
    }
}

const filterVal = arr.filter(i => i === 2);

console.log('filter val -> ', filterVal);


// reduce function

if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {
        let accumulator = initialValue;
        let startIndex = 0;

        if (accumulator === undefined) {
            accumulator = this[0];
            startIndex = 1;
        }

        for (let i = 0; i < this.length; i++) {
            accumulator = callback(accumulator, this[i], i, this);
        }
        return accumulator;
    }
}

const valReduce = arr.myReduce((acc, crr) => acc + crr, 0);

console.log('reduce sum -> ', valReduce);



if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
}

arr.myForEach(num => {
    console.log('my num -> ', num);
})