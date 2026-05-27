// Day 8
// Problem Statement = We have to disguised as string merging.
// Example
// Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
// Output: false
// Explanation: One way to get s3 is: s1 = "aabcc" and s2 = "dbbca", then we can interleave them to get "aadbbbaccc". However, there is no way to interleave s1 and s2 to get s3.
// Core Problem what we have to do = We need to determine if s3 is formed by interleaving s1 and s2 while maintaining the order of characters in both strings.

// Most Effective Method
function isInterleave(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    let memo = new Map();
    function dfs(i, j) {
        let key = `${i},${j}`;
        if (memo.has(key)) {
            return memo.get(key);
        }
        if (i === s1.length && j === s2.length) {
            return true;
        }
        let k = i + j;
        let result = false;
        // take from s1
        if (
            i < s1.length &&
            s1[i] === s3[k]
        ) {
            result = dfs(i + 1, j);
        }
        // take from s2
        if (
            !result &&
            j < s2.length &&
            s2[j] === s3[k]
        ) {
            result = dfs(i, j + 1);
        }
        memo.set(key, result);
        return result;
    }
    return dfs(0, 0);
}

console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));