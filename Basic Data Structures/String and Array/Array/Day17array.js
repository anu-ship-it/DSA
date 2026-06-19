// Day 17
// Problem Statement : Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.
// Example
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
// Explanation: Count how many times each number appears, output numbers in the order specified by arr2, then output the remaining numbers in ascending order.
// Core Probelm what we have to do = We have to rearrange arr1 according to a custom order provided by arr2?

// Most Effective Method
function relativeSortArray(arr1, arr2) {
    const count = new Array(1001).fill(0);
    for (let num of arr1){
        count[num]++;
    }
    const result = [];
    for (let num of arr2){
        while (count[num]>0){
            result.push(num);
            count[num]--;
        }
    }
    for (let num = 0; num <= 1000; num++){
        while (count[num] > 0){
            result.push(num);
            count[num]--;
        }
    }
    return result;
}
console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));
