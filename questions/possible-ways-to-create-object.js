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

// ❌ Expecting own property
// const obj = Object.create({ a: 1 });
// obj.hasOwnProperty('a'); // false


// Because a is on the prototype.

// 4 

// The create method of Object is used to create a new object by passing the specified prototype object and properties as arguments, i.e.,
// this pattern is helpful to create new objects based on existing objects.
// In other words, this is useful for setting up prototypal inheritance. 
// The second argument is optional and it is used to create properties on a newly created object.

var object11 = Object.create(null);

let vehicle12 = {
  wheels: "4",
  fuelType: "Gasoline",
  color: "Green",
};

let carProps12 = {
  type: {
    value: "Volkswagen",
    enumerable: true
  },
  model: {
    value: "Golf",
    enumerable: true
  }
};

const car2 = Object.create(vehicle12, carProps12);
console.log('hereree---', car2);


// Define the prototype object
var vehicle11 = {
    wheels: 4,
    drive() {
        return 'driving';
    }
};

// Define properties with descriptors
var carProps11 = {
    brand: {
        value: 'Toyota',
        writable: true,
        enumerable: true,
        configurable: true
    }
};

var car22 = Object.create(vehicle11, carProps11);
console.log(car22);  // { brand: 'Toyota' }
console.log(car22.wheels);  // 4 (inherited from vehicle1)
console.log(car22.drive());  // 'driving'