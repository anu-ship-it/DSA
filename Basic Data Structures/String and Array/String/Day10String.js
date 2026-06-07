// Day 10
// Problem Statement : Given two sorted arrays, the task is to merge them into a single sorted array. This problem is a great test of your understanding of merge operations and arrays.
// Example
// Input: arr1 = [1, 3, 5], arr2 = [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]
// Core Problem what we have to do = We need to merge two sorted arrays into a single sorted array.

// Most Effective Method
function mergeSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
