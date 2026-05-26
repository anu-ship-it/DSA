// Day 7
// Problem Statement = We have to sort an array of 0s, 1s and 2s without using any sorting algorithm.
// Example
// Input: nums = [0, 2, 1, 5, 3, 4]
// Output: [0, 1, 2, 4, 5, 3]
// Explanation: The array is sorted in-place such that all 0s come first, followed by all 1s, and then all 2s.
// Core Problem what we have to do = We need to sort an array containing only 0s, 1s, and 2s in a single pass without using any sorting algorithm.

// Most Effective Method
function arrayNesting(nums) {
    let visited = new Array(nums.length).fill(false);
    let maxLength = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!visited[i]) {
            let count = 0;
            let current = i;
            while (!visited[current]) {
                visited[current] = true;
                current = nums[current];
                count++;
            }
            maxLength = Math.max(maxLength, count);
        }
    }
    return maxLength;
}

console.log(arrayNesting([0, 2, 1, 5, 3, 4]));