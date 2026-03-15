/*************************************************
 * 8. THIS KEYWORD
 * -----------------------------------------------
 * Definition:
 * 'this' refers to the object that is currently
 * executing the function.
 *
 * Value of 'this' depends on how the function
 * is called.
 *************************************************/

const person = {
    name: 'Alok',
    greet() {
        console.log('Hello ' + this.name);
    }
}

person.greet();


/*************************************************
 * Example of 'this' in arrow function
 *************************************************/

const obj = {
    name: 'Goldy',
    normalFn() {
        console.log('Normal fn ->', this.name);
    },
    arrowFn: () => {
        console.log('Arrow fn ->', this.name);
    }
}

obj.normalFn();
obj.arrowFn();