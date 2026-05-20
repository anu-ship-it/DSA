// Day 4
// Problem Statement = Take an array and split it into smaller arrays of fixed size.
// Example
// Input: arr = [8, 5, 3, 2, 6], size = 6
// Output: [[8, 5, 3, 2, 6]]
// Explanation: The array is split into one subarray of size 6, which contains all the elements of the original array.

// Core Problem what we have to do = We need to split the given array into smaller arrays of a specified size.

// Most Effective Method
function chunk(arr, size) {
    let result = [];

    for (let i =0; i < arr.length; i += size) {
        let temp = [];

        for (let j =i; j < i + size && j < arr.length; j++) {
            temp.push(arr[j]);
        }

        result.push(temp);
    }

    return result;
}

console.log(chunk([8, 5, 3, 2, 6], 6)); 