// Day 6
// Problem Statement = Duplicate the array and attach it to itself.
// Example
// Input: arr = [1, 2, 1]
// Output: arr = [1, 2, 1, 1, 2, 1]
// Explanation: The array elements are duplicated and attach to same array to become [1, 2, 1, 1, 2, 1]
// Core Problem What we have to do = we need to concatention each elements, so that i can duplicate.

// Most effective Method
function getConcatenation1(nums) {
    return nums.concat(nums);
}

// For understanding the logic of reversing an array without using built-in functions
function getConcatenation(nums) {
    let n = nums.length;
    let ans = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;
}

console.log(getConcatenation([1,2,1]));
