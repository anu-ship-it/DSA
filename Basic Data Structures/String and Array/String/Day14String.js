// Day 14
// Problem Statement : A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
// s[i] == 'I' if perm[i] < perm[i + 1]
// s[i] == 'D' if perm[i] > perm[i + 1]
// Example
// Input: s = "IDID"
// Output: [0,4,1,3,2]
// Core Problem What we have to do = Make the safest local choice that never blocks future choices.

// Most Effective Method
function diStringMatch(s) {
    let low = 0;
    let high = s.length;
    const result = [];
    for (let ch of s) {
        if (ch === 'I'){
            result.push(low);
            low++;
        }else{
            result.push(high);
            high--;
        }
    }
    result.push(low);
    return result;
}
console.log(diStringMatch("IDEFIFG"));
