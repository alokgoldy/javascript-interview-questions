// In es6 javascript classes are primarily syntactic sugar over javascript's existing prototype based 
// inheritance, For example, the prototype based inheritance written in function expression as below.

function Bike(model, color) {
    this.model = model;
    this.color = color;
}

Bike.prototype.getDetails = function() {
    return this.model + ' bike has ' + this.color + ' color';
}

const b = new Bike('apache', 'red');

console.log(b);
console.log(b.getDetails());

class Bike2 {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    getDetails() {
        return this.model + " bike has " + this.color + " color";
    }
}

const cb = new Bike2('black', 'pulsar');

console.log(cb);
console.log(cb.getDetails());