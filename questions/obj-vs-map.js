// Object converts keys to strings

const obj = {};
obj[1] = 'one';
obj['1'] = 'ONE';
obj[1] = 'one';

console.log(obj);

// Map preserves key identity

const map = new Map();

map.set(1, 'ONE');
map.set('1', 'one');
map.set(() => { }, 'read');

console.log(map);

// ----------------------------------------------------------------------

// Prototype collision problem (Object)

const obj1 = {};
obj1['toString'] = 'oops';
// console.log('obj1.toString---', obj1.toString());
// unexpected obj1.toString is not a function

const map1 = new Map();
map1.set("toString", "safe");

console.log(map1.get("toString"), map1); // safe

// --------------------------------------------------------------------------

// Iteration (cleaner with Map)

for (const [key, value] of map) {
    console.log('iteration', key, ' ', value);
}

const myObj = {
    name: 'alok',
    role: 'js dev',
    package: '1cr'
}
Object.entries(myObj).forEach(([key, value]) => console.log('object iteration', key, ' ', value));



// When should YOU use what?
// ✅ Use Object when:

// You’re modeling data (like a user, config, API response)

// You need JSON serialization

// Keys are fixed and known

// ✅ Use Map when:

// Keys are dynamic or non-string

// You frequently add/remove entries

// Order matters

// You want predictable behavior