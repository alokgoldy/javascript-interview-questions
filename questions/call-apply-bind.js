// call method

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
    console.log(
        greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?


const std1 = { name: 'rahul', roll: 23 };
const std2 = { name: 'riya', roll: 12 };

function attendance(t1, t2) {
    console.log(
        t1 + ' ' + this.roll + ' ' + t2 + ' ' + this.name
    )
}

attendance.call(std1, 'Roll', 'Name');
attendance.call(std2, 'Roll', 'Name');


// ----------------------------------------------------------------------------------------------

// The apply() method is similar to call(), but it takes the function arguments as an array (or array-like object) instead of individual arguments.

const emp1 = { firstName: 'alok', lastName: 'goldy' }
const emp2 = { firstName: 'jimmy', lastName: 'baily'}

function applyInvite(g1,g2){
    console.log(
        g1 + ' ' + this.firstName + ' ' + this.lastName + ' ' + g2
    )
}

applyInvite.apply(emp1, ['Hello apply ', 'How are you'])
applyInvite.apply(emp2, ['Hello apply ', 'How are you'])


// -------------------------------------------------------------------------------------------------

// The bind() method creates a new function with a specific this  value and, optionally, preset initial arguments.
// Unlike call and apply, bind does not immediately invoke the function; instead, it returns a new function that you can call later.

function bindInvite(g1, g2){
    console.log(
        g1 + ' ' + this.firstName + ' ' + this.lastName + ' ' + g2
    )
}

const b1 = bindInvite.bind(emp1);
const b2 = bindInvite.bind(emp2);

b1('Hello bind ', 'How are you');
b2('Hello bind ', 'How are you');