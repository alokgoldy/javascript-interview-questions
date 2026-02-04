const person = {
    greet() {
        return `Hello this is ${this.name}`;
    }
}

const user = Object.create(person);
user.name = 'Alok Goldy';
console.log(user);
console.log(user.greet());



// Object.create vs class

const animal = {
    speak() {
        return 'sound';
    }
}

const dog = Object.create(animal);
console.log('1-', dog.speak())
dog.speak = function () {
    return 'bark';
}
console.log('2-', dog.speak())

// Using class

class Animal {
    speak() {
        return 'sound-bhow';
    }
}

class Dog extends Animal {
    // speak() {
    //     return 'bark'
    // }
}
const myDog = new Dog();
console.log(myDog.speak());