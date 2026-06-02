// Day 7
// Problem Statement : Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// Example
// Input: chars = ["a","a","b","b","c","c","c"]
// Output: 6
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Core Problem what we have to do = We have to compress the given array of characters by counting the consecutive repeating characters and appending the character followed by the count of the characters in the compressed string.
// For understanding the logic of compressing the given array of characters by counting the consecutive repeating characters and appending the character followed by the count of the characters in the compressed string without using build -in function

// Most Efficient Solution
function compress(chars) {
    let write = 0;
    let read = 0;
    while (read < chars.length) {
        let currentChar = chars[read];
        let count = 0;
        while (
            read < chars.length &&
            chars[read] === currentChar
        ) {
            read++;
            count++;
        }
        chars[write] = currentChar;
        write++;
        if (count > 1) {
            let digits = count.toString();
            for (let digit of digits) {
                chars[write] = digit;
                write++;
            }
        }
    }
    return write;
}

console.log(compress(["a","a","b","b","c","c","c"]));
