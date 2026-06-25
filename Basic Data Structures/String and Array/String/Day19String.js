// Day 19
// Problem Statement : You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously. 
// Example
// Input : order = "bcafg", s = "abcb"
// Output : "bcad"
// Core Problem we have to solve = How do we output the characters of 5 according to the sequence given in order?

// Most optimal solution
function customSortString(order, s) {
    const freq = {};
    for (let ch of s) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    let result = "";
    for (let ch of order) {
        while (freq[ch] > 0) {
            result += ch;
            freq[ch]--;
        }
        delete freq[ch];
    }
    for (let ch in freq) {
        while (freq[ch] > 0) {
            result += ch;
            freq[ch]--;
        }
    }
    return result;
}
console.log(customSortString("cba", "abcd"));