// const person = {
//     greet() {
//         return `Hello this is ${this.name}`;
//     }
// }

// const user = Object.create(person);
// user.name = 'Alok Goldy';
// console.log(user);
// console.log(user.greet());



// // Object.create vs class

// const animal = {
//     speak() {
//         return 'sound';
//     }
// }

// const dog = Object.create(animal);
// console.log('1-', dog.speak())
// dog.speak = function () {
//     return 'bark';
// }
// console.log('2-', dog.speak())

// // Using class

// class Animal {
//     speak() {
//         return 'sound-bhow';
//     }
// }

// class Dog extends Animal {
//     // speak() {
//     //     return 'bark'
//     // }
// }
// const myDog = new Dog();
// console.log(myDog.speak());


// to make object in javascript

const obj = {
    name: 'Alok',
    roll: 22
}

const obj1 = new Object();

const obj2 = Object.create(null);

let vehicle = {
    wheels: "4",
    fuelType: "Gasoline",
    color: "Green",
};
let carProps = {
    type: {
        value: "Volkswagen",
    },
    model: {
        value: "Golf",
    },
};

var car = Object.create(vehicle, carProps);

function Person(name) {
    this.name = name;
    this.age = 21;
}

const obj3 = new Person('sudheer')

console.log(car);

console.log('alok', {
    obj,
    obj1,
    obj2,
    obj3
})

const objt = {
    name: 'alok',
    roll: 1
}

function fun(param1, param2) {
    console.log(`${param1} ${param2} ${this.name}`);
}

fun.apply(objt, ['Good', 'morning']);

const arr = [1, 2, 3, 4];

const arr2 = arr.splice(2, 1, 'alok', 'goldy');

console.log(arr2, arr);

const mp = new Map();
mp.set('alok', 2);
mp.set('goldy', 4);

console.log(mp, {
    goldy: mp.get('goldy')
});

const fn1 = (a) => (b) => (c) => console.log(a + b + c);
fn1(1)(1)(1);


let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);

console.log({
    uri,
    encoded_uri,
    decoded_uri
})

const fn2 = () => {
    const cache = {};
    return function (a, b) {
        if (cache[`${a}${b}`]) {
            return cache[`${a}${b}`];
        }
        console.log('calculating.......');
        const val = a + b;
        cache[`${a}${b}`] = val;
        return val;
    }

}
const fn = fn2();
console.log('alok99 ->>>', fn(2, 3));
console.log('alok99 ->>>', fn(2, 3));

class Bike {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    getDetails() {
        console.log(`This bike ${this.name} has color ${this.color} , is it good ?`);
    }
}


const bk = new Bike('hero honda', 'redgreen');
bk.getDetails()

const parr = [1, 2, 3];

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        let result = [];

        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this));
        }
        return result;
    }
}

const pvar = parr.myMap((item, idx, tempArr) => {
    console.log('alok->>', item, idx, tempArr);
    return `${item * 2}-${idx}`;
})

console.log('after map ', pvar);

if (!Array.prototype.myMap2) {
    Array.prototype.myMap2 = function (callback) {
        let result = [];

        for (let i = 0; i < this.length; i++) {
            result.push(callback(this[i], i, this));
        }
        return result;
    }
}

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
        let result = [];

        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }

        }

        return result;
    }
}

const filval = parr.myFilter(i => i > 2);
console.log(filval);


if (!Array.prototype.myFilter2) {
    Array.prototype.myFilter2 = function (callback) {
        let result = [];

        for (let i = 0; i < this.length; i++) {
            if (callback(this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    }
}

const filArray = [3, 7, 8, 99, 55, 44, 66, 31];

const valfil = filArray.myFilter2(i => i % 2 === 0);

console.log('filter val ', valfil);


if (!Array.prototype.myReduce) {
    Array.prototype.myReduce = function (callback, initialValue) {
        let accum = initialValue;
        let startIndex = 0;

        if (accum === undefined) {
            accum = this[0];
            startIndex = 1;
        }

        for (let i = startIndex; i < this.length; i++) {
            accum = callback(accum, this[i], i, this);
        }

        return accum;
    }
}

const redval = filArray.myReduce((acc, crr) => acc + crr, 0);

console.log('redval->>', redval);