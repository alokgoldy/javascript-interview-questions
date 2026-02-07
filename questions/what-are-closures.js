// A closure is the combination of a function bundled(enclosed) 
// together with its lexical environment within which that function was declared. 
// i.e, It is an inner function that has access to the outer or enclosing function’s variables,
// functions and other data even after the outer function has finished its execution.

// The closure has three scope chains.

//     Own scope where variables defined between its curly brackets
//     Outer function's variables
//     Global variables

function Welcome(name) {
    var greetingInfo = function (message) {
        console.log(message + " " + name);
    }
    return greetingInfo;
}

var g = new Welcome('alok');

g('hi');