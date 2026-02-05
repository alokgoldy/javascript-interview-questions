

// When you do:

// obj.key

// JavaScript checks in this order:

// 1. `obj`
// 2. `obj.__proto__`
// 3. `obj.__proto__.__proto__`
// 4. …until `null`

function Person(name) {
    this.name = name;
}

const p = new Person('alok');

console.log(p);

// What’s actually true:
p.__proto__ === Person.prototype

// prototype → property of constructor functions

// __proto__ → internal link on objects

// new connects them



const grandParent = {
    a: 1
}

const parent = Object.create(grandParent);
parent.b  = 2

const child = Object.create(parent);
child.c = 1;

console.log('child - a', child.a);
console.log('child - b', child.b);
console.log('child - c', child.c);
console.log('child - d', child.d);

// const val1 = Object.getPrototypeOf(child)
// console.log('getPrototypeOf-child', val1);
const val2 = Object.setPrototypeOf(child, grandParent);
// const val3 = Object.getPrototypeOf(child)
// console.log('setPrototypeOf-child-to-grandParent', val2, val3);

const val4 = child.hasOwnProperty('a');
console.log(val4);