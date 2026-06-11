// Day 12
// Problem Statement : Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// core logic is to use stack and push the character in stack if it is not # and if it is # then pop the top element from stack and at the end compare the two stacks

// Most optimal solution
function backspaceCompare(s, t) {
    function build(str) {
        const stack = [];
        for (let ch of str) {
            if (ch === '#') {
                if (stack.length) {
                    stack.pop();
                }
            } else {
                stack.push(ch);
            }
        }
        return stack.join('');
    }
    return build(s) === build(t);
}
console.log(backspaceCompare("ab#c", "ad#c"));
console.log(backspaceCompare("ab##", "c#d#"));
