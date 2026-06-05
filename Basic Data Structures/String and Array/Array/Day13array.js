// Day 13
// Problem Statement : Given an integer array nums, rotate the array to the right by k stepss, where k is non-negative.
// Example
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Core Problem what we have to do = We need to rotate the given array to the right by k steps.

// Most Effeective Method
function rotate(nums, k) {
    const n = nums.length;
    k %= n;
    reverse(nums, 0, n-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, n-1);
}
function reverse(arr, left, right){
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
let nums = [1,2,3,4,5,6,7];
rotate(nums, 3);
console.log(nums);