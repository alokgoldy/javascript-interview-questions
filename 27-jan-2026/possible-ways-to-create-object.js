// What are the possible ways to create objects in JavaScript

// 🚀 1. Using object literal notation

const obj = {
    name: 'alok',
    role: 'js dev'
}

const mobj = {
  name: 'alok',
  role: 'js dev'
}
// console.log('mobj', mobj);
// 🚀 2. Using the Object constructor

// The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

const obj2 = new Object();
obj2.name = 'rahul';

// The Object() is a built-in constructor function so "new" keyword is not required for creating plain objects. The above code snippet can be re-written as:

const obj3 =  Object();
obj3.name = 'ravi';



// 🚀 3. Using the new keyword with a constructor function

function Person(name) {
    this.name = name;
    this.age = 21;
}
const obj4 = new Person('alok goldy');

// 🚀 4. Using Object.create()

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

let mobileProps = {
  type: {
    value: "Apple",
  },
  model: {
    value: "18",
  },
};

const obj5 = Object.create(vehicle);


// 🚀 5. Using class syntax (ES6+)

class Man {
  constructor(name) {
    this.name = name;
  }
}

const object = new Man("Sudheer");

// 🚀 6. Singleton pattern:

const Singleton = (function () {
let instance;

function createInstance() {
  return { name: "Sudheer" };
}

return {
  getInstance: function () {
    if (!instance) {
      instance = createInstance();
    }
    return instance;
  }
};
})();

// Usage
const sobj1 = Singleton.getInstance();
const sobj2 = Singleton.getInstance();

// console.log(sobj1 === sobj2); // true


// console.log(obj5.wheels);


// -------Revision------------------Revision------------------Revision------------------Revision------------------Revision-----------


// 1.

const robj = {
  name: 'alok',
  role: 'js dev'
}

console.log('robj', robj);

// 2

const robj2 = Object();

robj2.name = 'alok';
robj2.role = 'no role';

console.log('robj2', robj2);

// 3

const robj3 = new Object();

robj3.name = 'alok3';
robj3.role = 'js dev 3';

console.log('robj3', robj3);

// | Input                  | `Object(value)`     | `new Object(value)` |
// | ---------------------- | ------------------- | ------------------- |
// | `Object()`             | `{}`                | `{}`                |
// | `Object({})`           | returns same object | new object          |
// | `Object(5)`            | `Number {5}`        | `Number {5}`        |
// | Conversion role        | ✔ yes               | ❌ no                |
// | Explicit instantiation | ❌                   | ✔                   |

// Object('alok') === 'alok';     // false
// new Object('alok') === 'alok'; // false



