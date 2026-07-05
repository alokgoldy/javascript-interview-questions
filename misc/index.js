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

const fn1 = (a) => (b) => (c) => console.log(a+b+c);
fn1(1)(1)(1);


let uri = "employeeDetails?name=john&occupation=manager";
let encoded_uri = encodeURI(uri);
let decoded_uri = decodeURI(encoded_uri);

console.log({
    uri,
    encoded_uri,
    decoded_uri
})