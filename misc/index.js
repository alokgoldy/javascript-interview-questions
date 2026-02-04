const person = {
    greet() {
        return `Hello this is ${this.name}`;
    }
}

const user = Object.create(person);
user.name = 'Alok Goldy';
console.log(user);
console.log(user.greet());