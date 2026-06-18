// Day 6
// Problem Statement : The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// Given an encoded string, return its decoded string.

// Example
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Explanation: "3[a]2[bc]" decodes as "aaa" + "bcbc" = "aaabcbc".
// Core Problem : We have to decode the given string by following the encoding rule which is k[encoded_string]. We have to repeat the encoded_string k times and then we will get the decoded string.

// Most optimal solution using stack
function decodeString(s) {
    let stack = [];
    let currentString = "";
    let currentNumber = 0;
    for (let char of s) {
        if (!isNaN(char)) {
            currentNumber =
                currentNumber * 10 + Number(char);
        } else if (char === '[') {
            stack.push([
                currentString,
                currentNumber
            ]);
            currentString = "";
            currentNumber = 0;
        } else if (char === ']') {
            let [prevString, repeatCount] =
                stack.pop();
            currentString =
                prevString +
                currentString.repeat(repeatCount);
        } else {
            currentString += char;
        }
    }
    return currentString;
}

console.log(decodeString("3[a]2[bc]"));
