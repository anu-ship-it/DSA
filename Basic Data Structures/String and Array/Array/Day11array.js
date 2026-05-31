// Day 11
// Problem Statement : You are given an integer array nums that represents a circular array. Your task is to create a new array result of the same size.
// Example
// Input nums = [3,-2,1,1]
// Output: [1, 1, 1, 3]
// Explanation: The circular array representation of nums is [3, -2, 1, 1, 3, -2, 1, 1]. The value at each index i in the result array is the sum of the next two elements in the circular array starting from index i. For index 0: result[0] = nums[1] + nums[2] = -2 + 1 = -1. For index 1: result[1] = nums[2] + nums[3] = 1 + 1 = 2. For index 2: result[2] = nums[3] + nums[4] = 1 + 3 = 4. For index 3: result[3] = nums[4] + nums[5] = 3 + (-2) = 1. Therefore, the final output is [1, 1, 1, 3].
// Core Problem what we have to do = We need to create a new array where each element is the sum of the next two elements in the circular array representation of the input array.

// Most Effective Method
function constructTransformedArray(nums) {
    const n = nums.length;
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) {
            result[i] = 0;
            continue;
        }
        const newIndex =
            ((i + nums[i]) % n + n) % n;
        result[i] = nums[newIndex];
    }
    return result;
}
const nums = [3, -2, 1, 1];
console.log(constructTransformedArray(nums));