// Day18
// Problem Statement : Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.Return any possible rearrangement of s or return "" if not possible.
// Example
// Input : s = "aab"
// Output : "aba"
// Core problem we have to solve = How do we always choose a character that is different from the last character used?

// Most effective Solution
function reorganizeString(s) {
    const freq = new Array(26).fill(0);
    for (let ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }
    let maxFreq = Math.max(...freq);
    if (maxFreq > Math.floor((s.length + 1) / 2)) {
        return "";
    }
    let result = "";
    let prev = -1;
    for (let i = 0; i < s.length; i++) {
        let best = -1;
        for (let j = 0; j < 26; j++) {
            if (
                freq[j] > 0 &&
                j !== prev &&
                (best === -1 || freq[j] > freq[best])
            ) {
                best = j;
            }
        }
        result += String.fromCharCode(best + 97);
        freq[best]--;
        prev = best;
    }
    return result;
}
console.log(reorganizeString("aab"));