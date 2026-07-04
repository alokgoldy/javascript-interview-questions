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

function Person(name){
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