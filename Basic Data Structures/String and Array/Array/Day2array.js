// Day 2
// Problem Statement = You are given an array of integers.
// You must return the same array in reverse order.
// Example
// Input: arr = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]
// Explanation: The array is reversed to become [5, 4, 3, 2, 1].

// Core Problem what we have to do = We need to reverse the order of elements in the given array.

// Most Effective Method
function reverseArray1(arr) {
    return arr.reverse();
}

// For understanding the logic of reversing an array without using built-in functions
function reverseArray2(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(reverseArray2([1,9,6,2]));
