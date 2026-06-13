// Day 13
// Problem Statement : Write a function that reverse a string. The input string is given as an array of characters s.
// Example
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Core Probelem what we have to do = We have to swap 1 with last , same 2 with 2 last.

// Most effective Solution
function reverseString(s) {
let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}    
console.log(reverseString("h","e","e","y"));
