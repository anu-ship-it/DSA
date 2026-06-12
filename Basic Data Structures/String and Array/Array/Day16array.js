// Day 16
// Problem Statement : Given an array of integers arr, return true if and only if it is a valid mountain array.
// Example
// Input: arr = [2,1]
// Output: false
// Explanation: 

// Most Effective Method
function validMountainArray(arr) {
    const n = arr.length;
    if(n < 3) {
        return false;
    }
    let i = 0;
    // climb up
    while (
        i + 1 < n &&
        arr[i] < arr[i + 1]
    ) {
        i++;
    }
    // peak cannot be first or last
    if (
        i === 0 ||
        i === n - 1
    ) {
        return false;
    }
    // climb down
    while (
        i + 1 < n &&
        arr[i] > arr[i + 1]
    ) {
        i++;
    }
    return i === n - 1;
}
con = [3, 5, 7, 8];
console.log(validMountainArray(con));
