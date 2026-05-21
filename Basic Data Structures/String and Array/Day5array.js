// Day 5
// Problem Statement = Given an array of integers, return a new array containing the squares of each number in the original array.

// Example
// Input: arr = [2, 4, 6, 8]
// Output: arr = [4, 16, 36, 64]
// Explanation: The array is Squared to become [4, 16, 36, 64]

// Core Problem What we have to do = We need to square the index number with it self in array

// Most effective Method
function SquaredArray(arr) {
    return arr.map(num => num * num);
}

// For understanding the logic of reversing an array without using built-in functions
function SquaredArray2(arr) {
    let squared = [];

    for (let i = 0; i < arr.length; i++) {
        result = arr[i] * arr[i];
        squared.push(result);
    }
    return squared;
}
console.log(SquaredArray2([2, 4, 6, 8]));
    