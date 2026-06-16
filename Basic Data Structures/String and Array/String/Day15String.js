// Day 15
// Problem Statement : Modify an input array of characters s in-place with O(1)extra memory
// Example
// Input : ['h','e','l','l','o']
// Output :['o','l','l','e','h']
// Explation : Do not return anything, modify s in-place instead.
// Core Problem what we have to do = Swap elements using destructuring assignment

// Most Effective Solution
let reverseString = function(s) {
    let left = 0;
    let right = s.length -1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};
console.log(reverseString(['h','e','l','l','o']));
