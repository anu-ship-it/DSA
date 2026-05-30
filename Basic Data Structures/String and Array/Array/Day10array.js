// Day 10
// Problem Statement: Given the integer n, return any beautiful array nums of length n. There will be at least one valid answer for the given n.
// A beautiful array is an array that satisfies the following conditions:
// nums is a permutation of the integers in the range [1, n].
// For every 0 <= i < j < k < nums.length, it is not the case that nums[i] * 2 == nums[j] + nums[k].
// Example
// Input: n = 4
// Output: [2, 1, 4, 3]
// Explanation: The beautiful array [2, 1, 4, 3] has the following properties:
// - It is a permutation of the integers in the range [1, 4].
// - For every 0 <= i < j < k < nums.length, it is not the case that nums[i] * 2 == nums[j] + nums[k]. For example, when i = 0, j = 1, and k = 2, we have nums[i] * 2 == 4 and nums[j] + nums[k] == 5, which satisfies the condition.
// Core Problem what we have to do = We need to generate a beautiful array of length n that satisfies the given conditions.

// Most Effective Method
function beautifulArray(n) {
    let result = [1];
    while (result.length < n) {
        let temp = [];
        // odds
        for (let num of result) {
            if (2 * num - 1 <= n) {
                temp.push(2 * num - 1);
            }
        }
        // evens
        for (let num of result) {
            if (2 * num <= n) {
                temp.push(2 * num);
            }
        }
        result = temp;
    }
    return result;
}
console.log(beautifulArray(4));