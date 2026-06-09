// Day 14
// Probelm Statement : An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array A is monotone increasing if for all i <= j, A[i] <= A[j]. An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
// Return true if and only if the given array A is monotonic.
// Example 
// Input: [1,2,2,3]
// Output: true
// Exaplanation: The given array is monotone increasing, so return true.
// Core Problem what we have to do = We need to determine if the given array is monotonic, meaning it is either non-decreasing or non-increasing.

// Most Effective Method
function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;

    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] < nums[i + 1]) {
            decreasing = false;
        }

        if (nums[i] > nums[i + 1]) {
            increasing = false;
        }
    }

    return increasing || decreasing;
}
console.log(isMonotonic([1, 2, 2, 3]));