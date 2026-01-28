// What are the possible ways to create objects in JavaScript

// 🚀 1. Using object literal notation

const obj = {
    name: 'alok',
    role: 'js dev'
}

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

console.log(obj5.wheels);
