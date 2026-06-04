// Day 8
// Problem Statement : Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
// In other words, return true if one of s1's permutations is the substring of s2.
// Example
// Input: s1 = "ab", s2 = "eidbaooo
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Core Problem what we have to do = We need to determine if one of the permutations of s1 is a substring of s2.

// Most Effective Method
function checkInclusion(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    const target = new Array(26).fill(0);
    const window = new Array(26).fill(0);
    for (let i = 0; i < s1.length; i++) {
        target[s1.charCodeAt(i) - 97]++;
        window[s2.charCodeAt(i) - 97]++;
    }
    if (arraysEqual(target, window)) {
        return true;
    }
    let left = 0;
    for (let right = s1.length; right < s2.length; right++) {
        window[s2.charCodeAt(right) - 97]++;
        window[s2.charCodeAt(left) - 97]--;
        left++;
        if (arraysEqual(target, window)) {
            return true;
        }
    }
    return false;
}

function arraysEqual(a, b) {

    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

console.log(checkInclusion("ab", "eidbaooo"));
