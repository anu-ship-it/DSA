// Day 15
// Problem Statement : Given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// Example
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6]. The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Core Problem what we have to do = We need to merge two sorted arrays into a single array sorted in non-decreasing order.

// Most Effeective Method
function merge(nums1, m, nums2, n) {

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {

        if (nums1[i] > nums2[j]) {

            nums1[k] = nums1[i];
            i--;

        } else {

            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }

    while (j >= 0) {

        nums1[k] = nums2[j];

        j--;
        k--;
    }
}
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
merge(nums1, 3, nums2, 3);
console.log(nums1);