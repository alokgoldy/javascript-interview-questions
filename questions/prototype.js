/*************************************************
 * 6. PROTOTYPE
 * -----------------------------------------------
 * Definition:
 * In JavaScript, every object has a prototype.
 * Objects inherit properties and methods from
 * their prototype.
 *
 * Why it is used:
 * - Memory efficiency
 * - Object inheritance
 *************************************************/


function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log('Hello, my name is ', this.name);
}

const user = new Person('alok');

user.sayHello();