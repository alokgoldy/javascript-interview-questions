/*************************************************
JavaScript is single-threaded and uses the Event Loop to handle asynchronous operations.
The call stack executes synchronous code first. Async operations like setTimeout and fetch are handled by Web APIs.
Once completed, their callbacks are placed in queues. 
The event loop continuously checks if the call stack is empty and moves tasks from the microtask queue first,
then the macrotask queue.
*************************************************/


console.log("Start");

setTimeout(() => console.log("Timeout1"), 0);

Promise.resolve().then(() => {
  console.log("Promise1");
  setTimeout(() => console.log("Timeout2"), 0);
});

Promise.resolve().then(() => console.log("Promise2"));

console.log("End");


// Call Stack
// ↓
// Microtasks (Promises)
// ↓
// Macrotasks (setTimeout)

/******************* 
 * 
1️⃣ Call Stack (sync code)
2️⃣ Microtask Queue
   - Promise.then
   - queueMicrotask
3️⃣ Macrotask Queue
   - setTimeout
   - setInterval

*******************/

console.log("A")

setTimeout(() => console.log("B"), 0)

Promise.resolve().then(() => {
  console.log("C")
  setTimeout(() => console.log("D"), 0)
})

Promise.resolve().then(() => console.log("E"))

console.log("F")

// A F C E B D