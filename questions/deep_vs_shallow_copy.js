/*************************************************
1️⃣ Shallow Copy

A shallow copy copies only the first level of the object.

If the object contains nested objects, the reference is copied instead of creating a new object.

Nested objects still point to the same memory location.
 *************************************************/


const person = {
    name: 'alok',
    add: {
        city: 'Patna'
    }
}

const copy = { ...person };

copy.add.city = 'Delhi';

console.log(person, copy);


/*************************************************
2️⃣ Deep Copy

A deep copy creates a completely independent clone, including nested objects.

Changes in the copied object do not affect the original object.
 *************************************************/

const person2 = {
    name: 'alok',
    add: {
        city: 'Patna'
    }
}

const copy2 = JSON.parse(JSON.stringify(person2));

copy2.add.city = 'Delhi';
const deep = structuredClone(person2);
const anotherDeep = structuredClone(person2);
anotherDeep.add.city = 'Ajmer';
deep.add.city = 'Jaipur';
console.log(person2, copy2, deep, anotherDeep);