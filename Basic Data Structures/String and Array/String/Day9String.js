// Day 9
// Problem Statement : Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
// Example 1:
// Input: s = "()"
// Output: true
// Explanation: The string is already valid.
// Example 2:
// Explanation: The string is already valid.
// Core Problem : We have to check the string is valid or not by using the given condition in the problem statement. We have to check the string is valid by using the stack data structure and we have to check the condition of the string is valid or not by using the stack data structure.

function checkValidString(s) {
    let low = 0;
    let high = 0;
    for (let char of s) {
        if (char === '(') {
            low++;
            high++;
        } else if (char === ')') {
            low--;
            high--;
        } else {
            // '*'
            low--;
            high++;
        }
        if (high < 0) {
            return false;
        }
        low = Math.max(0, low);
    }
    return low === 0;
}
console.log(checkValidString("()"));
console.log(checkValidString("(*)"));