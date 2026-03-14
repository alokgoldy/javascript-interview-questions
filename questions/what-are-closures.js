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

var g = Welcome('alok');

g('hi');

/*************************************************
 * 1. CLOSURES
 * -----------------------------------------------
 * Definition:
 * A closure is created when a function remembers
 * variables from its outer scope even after the
 * outer function has finished executing.
 *
 * Why it is used:
 * - Data privacy
 * - Function factories
 * - Maintaining state
 *************************************************/

function createCounter(){
    let counter = 0;

    return function () {
        counter++;
        console.log('my counter value is ->', counter);
    }
}

const counter = createCounter();

counter();
counter();
counter();


function createBankAccount(initialBalance){
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            balance+=amount;
            return balance;
        },
        withdraw(amount){
            if(amount > balance){
                return 'Insufficent Balance';
            }
            return balance-=amount;
        },
        getBalance(){
            return balance;
        }
    }
}

const account = createBankAccount(100);

console.log('50 amount deposited , new balance ->', account.deposit(50)); // 150
console.log('30 amount withdraw , new balance ->', account.withdraw(30)); // 120
console.log('Final balance ->', account.getBalance()); // 120


function createRateLimiter(limit){
    let count = 0;

    return function(){
        if(count >= limit){
            console.log("Rate Limit Exceeded");
            return;
        }
        count++;
        console.log(`Request allowed (${limit - count})`)
    }
}

const apiCall = createRateLimiter(3);
apiCall();
apiCall();
apiCall();
apiCall();



// Here are **senior-level closure examples** that are actually asked in **SDE-2 / senior frontend interviews**. I’ll include:

// • Problem
// • Why closures are needed
// • Clean solution
// • What interviewers check

// ---

// # 1️⃣ Private Variables (Real Production Pattern)

// Closures are often used to create **private state in JavaScript modules**.

// ```javascript
// function createBankAccount(initialBalance) {
//   let balance = initialBalance; // private variable

//   return {
//     deposit(amount) {
//       balance += amount;
//       return balance;
//     },

//     withdraw(amount) {
//       if (amount > balance) {
//         return "Insufficient balance";
//       }
//       balance -= amount;
//       return balance;
//     },

//     getBalance() {
//       return balance;
//     }
//   };
// }

// const account = createBankAccount(100);

// console.log(account.deposit(50)); // 150
// console.log(account.withdraw(30)); // 120
// console.log(account.balance); // undefined (private)
// ```

// ### Why Closure?

// The inner functions **remember `balance`** even after `createBankAccount()` has finished executing.

// So `balance` becomes **private state**.

// This is similar to **private fields in classes**.

// ---

// # 2️⃣ Memoization (High Level Optimization)

// Closures are used heavily for **performance optimization**.

// ```javascript
// function memoize(fn) {
//   const cache = {};

//   return function (...args) {
//     const key = JSON.stringify(args);

//     if (cache[key]) {
//       console.log("From cache");
//       return cache[key];
//     }

//     const result = fn(...args);
//     cache[key] = result;

//     console.log("Calculated");
//     return result;
//   };
// }

// function slowSquare(n) {
//   console.log("Computing...");
//   return n * n;
// }

// const memoSquare = memoize(slowSquare);

// console.log(memoSquare(5));
// console.log(memoSquare(5));
// ```

// ### Output

// ```
// Computing...
// Calculated
// 25

// From cache
// 25
// ```

// ### Why Closure?

// `cache` remains available inside the returned function.

// This pattern is used in:

// * React performance utilities
// * API caching
// * Expensive calculations

// ---

// # 3️⃣ Advanced Interview Question (Loop Closure Trap)

// Classic **senior interview trick question**.

// ```javascript
// function createFunctions() {
//   let arr = [];

//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }

//   return arr;
// }

// const funcs = createFunctions();

// funcs[0]();
// funcs[1]();
// funcs[2]();
// ```

// ### Output

// ```
// 3
// 3
// 3
// ```

// ### Why?

// Because `var` is **function scoped**, not block scoped.

// All functions close over **the same `i` variable**.

// After the loop ends:

// ```
// i = 3
// ```

// So every function prints **3**.

// ---

// ### Fix Using Closure

// ```javascript
// function createFunctions() {
//   let arr = [];

//   for (var i = 0; i < 3; i++) {
//     (function (j) {
//       arr.push(function () {
//         console.log(j);
//       });
//     })(i);
//   }

//   return arr;
// }
// ```

// Now output:

// ```
// 0
// 1
// 2
// ```

// ---

// # 4️⃣ Rate Limiter (Real Backend / Frontend System)

// Closures can manage **request limits**.

// ```javascript
// function createRateLimiter(limit) {
//   let count = 0;

//   return function () {
//     if (count >= limit) {
//       console.log("Rate limit exceeded");
//       return;
//     }

//     count++;
//     console.log(`Request allowed (${count})`);
//   };
// }

// const apiCall = createRateLimiter(3);

// apiCall();
// apiCall();
// apiCall();
// apiCall();
// ```

// ### Output

// ```
// Request allowed (1)
// Request allowed (2)
// Request allowed (3)
// Rate limit exceeded
// ```

// This pattern appears in:

// * API gateways
// * request throttling
// * analytics tracking

// ---

// # 5️⃣ Closure Based Event System (Very Senior)

// ```javascript
// function createEventEmitter() {
//   const listeners = {};

//   return {
//     on(event, callback) {
//       if (!listeners[event]) {
//         listeners[event] = [];
//       }
//       listeners[event].push(callback);
//     },

//     emit(event, data) {
//       if (listeners[event]) {
//         listeners[event].forEach(cb => cb(data));
//       }
//     }
//   };
// }

// const emitter = createEventEmitter();

// emitter.on("login", user => {
//   console.log("User logged in:", user);
// });

// emitter.emit("login", "Alok");
// ```

// ### Output

// ```
// User logged in: Alok
// ```

// Closure keeps **listeners private**.

// Used in:

// * Node.js EventEmitter
// * Redux internals
// * Pub/Sub systems

// ---

// # 🔥 Senior Level Closure Definition

// A **closure** is created when:

// > A function remembers variables from its **lexical scope** even after the outer function has finished executing.

// Example conceptually:

// ```
// Outer Function
//    ↓
// Creates Variable
//    ↓
// Inner Function
//    ↓
// Remembers Variable forever
// ```

// ---

// # ⚡ One Very Tricky Interview Question

// What is output?

// ```javascript
// function counter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// const c1 = counter();
// const c2 = counter();

// console.log(c1());
// console.log(c1());
// console.log(c2());
// ```

// ### Answer

// ```
// 0
// 1
// 0
// ```

// Because **each closure has its own memory**.

// ---

// If you want, I can also give you **10 extremely tricky closure interview questions** that companies like:

// * Amazon
// * Flipkart
// * Swiggy
// * Razorpay

// ask for **SDE-2 frontend roles**. These are much harder than normal ones.
