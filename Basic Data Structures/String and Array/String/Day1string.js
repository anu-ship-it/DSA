// Day 1
// Problem Statement = Given a string where each character should move to the right by a certain number of steps, return the resulting string after all characters have been moved. The string will only contain lowercase letters and spaces, and the number of steps will be a non-negative integer.

// Example
// Input: s = "abc", steps = 2
// Output: "cab"
// Explanation: 'a' moves to the right by 2 steps and becomes 'c', 'b' moves to the right by 2 steps and becomes 'a', and 'c' moves to the right by 2 steps and becomes 'b'.
// Core Problem what we have to do = We need to create a function that takes a string and a number of steps, and returns a new string where each character has been moved to the right by the specified number of steps.

// Most Efficient Solution
function shiftString(s, steps) {
    const n = s.length;
    steps = steps % n;
    return s.slice(-steps) + s.slice(0, n - steps);
}

// For understanding the logic of shifting a string without using built-in functions
function restoreString(s, indices) {
    let result = [];

    for (let i = 0; i < s.length; i++) {
        result[indices[i]] = s[i];
    }

    return result.join('');
}

console.log(
    restoreString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3])
);
