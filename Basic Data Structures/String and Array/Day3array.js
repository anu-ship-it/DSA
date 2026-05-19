// Day 3
// Problem Statement = You have to make pairs such that the sum of the smaller number from each pair becomes as large as possible.
// Example
// Input: arr = [1, 4, 3, 2]
// Output: 4
// Explanation: The optimal pairing is (1, 2) and (3, 4). The sum of the smaller numbers is 1 + 3 = 4.

// Core Problem what we have to do = We need to pair the numbers in such a way that the sum of the smaller numbers in each pair is maximized.

// Most Effective Method
function arrayPairSum(arr) {
    arr.sort((a, b) => a - b); 
    let sum = 0;
    for (let i = 0; i < arr.length; i += 2) {
        sum += arr[i]; 
    }
    return sum;
}
console.log(arrayPairSum([1, 4, 3, 2]));
