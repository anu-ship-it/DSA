// Day 1
// Problem Statement = Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
// Note that minor deviation from millis in the actual sleep duration is acceptable.

// Example
// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

// Core Problem what we have to do = We need to create a function that pauses execution for a certain number of milliseconds and then resolves.


async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}
let t = Date.now();
sleep(200).then(() => {
    console.log(Date.now() - t);
});