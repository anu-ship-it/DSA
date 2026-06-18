// Day 16
// Problem Statement : A magical string s consists of only '1' and '2' and obeys the following rule:
// Concatenating the sequence of lengths of its consecutive groups of identical characters '1' and '2' generates the string s itself.
// Example
// Input: n = 6
// Output: 3
// Explanation: The first 6 elements of magical string s is "122112" and it contains three 1's, so return 3.

// Most optimal solution
function magicalString(n) {
    if (n <= 0) return 0;
    if (n <= 3) return 1;
    const magic = [1, 2, 2];
    let head = 2;
    let num = 1;
    let count = 1;
    while (magic.length < n) {
        let repeat = magic[head];
        for (let i = 0; i < repeat; i++) {
            magic.push(num);
            if (
                num === 1 &&
                magic.length <= n
            ) {
                count++;
            }
        }
        num = num === 1 ? 2 : 1;
        head++;
    }
    return count;
}

console.log(magicalString(8));