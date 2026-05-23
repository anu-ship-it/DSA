// Day 2
// Problem Statement = Given a string where we have to how to traverse a string and make decisions based on the next character

// Example
// Input: s = "III"
// Output: 3
// Explanation: 
// Core Problem what we have to do = 

// For understanding the logic of shifting a string without using built-in functions
function romanToInt(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let current = values[s[i]];
        let next = values[s[i + 1]];
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
}

