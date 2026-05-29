// Day 5
// Problem Statement = Given two strings a and b, return the minimum number of times you should repeat string a so that string b is a substring of it. If it is impossible for b​​​​​​ to be a substring of a after repeating it, return -1.
// Example
// Input: a = "abcd", b = "cdabcdab"
// Output: 3
// Explanation: We return 3 because by repeating a three times "abcdabcdabcd", b is a substring of it. Note that b is not a substring of "abcdabcd".
// Core Probelm what we have to do = Just repeat the string a until we get the string b as a substring of it. If we get the string b as a substring of it then we will return the number of times we have repeated the string a otherwise we will return -1.

// For understanding the logic of repeating a string until we get the desired string as a substring of it without using build -in function
function repeatedStringMatch(a, b) {
    let count = 0;
    let repeated = '';
    while (repeated.length < b.length) {
        repeated += a;
        count++;
    }
    if (repeated.includes(b)) {
        return count;
    }
    repeated += a;
    count++;
    if (repeated.includes(b)) {
        return count;
    }
    return -1;
}

console.log(repeatedStringMatch("abcd","cdabcdab"));
