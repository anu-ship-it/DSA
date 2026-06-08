// Day 11
// Problem Statement : Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s. A shift on s consists of moving the leftmost character of s to the rightmost position of s.
// Example
// Input: s = "abcde", goal = "cdeab"
// Output: true
// Explanation: We can shift "abcde" to the right by 2 positions to get "cdeab".
// Core Logic : We can concatenate the string s with itself and check if the goal string is a substring of the concatenated string. If it is, then s can be shifted to become goal.

// Most Optimal Solution
function rotateString(s, goal) {
    if(s.length !== goal.length) {
        return false;
    }
    return (s + s).includes(goal);
}
console.log(rotateString("abcde", "cdeab")); 
