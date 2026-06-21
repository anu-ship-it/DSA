// Day 18
// Problem Statement : Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
// Example :
// Input : nums = [0,1]
// Output : 2
// Exaplanation : [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Core Problem what we have to do = Quickly detect that a subarray contains the same number of 0s and 1s?

// Most Effective Method
function findMaxLength(nums){
    const map = new Map();
    map.set(0, -1);
    let sum = 0;
    let maxLength = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            sum -= 1;
        } else {
            sum += 1;
        }
        if (map.has(sum)){
            maxLength =
                Math.max(
                    maxLength,
                    i - map.get(sum)
                );
        } else {
            map.set(sum, i);
        }
    }
    return maxLength;
}
console.log(findMaxLength([0,1,1,1,1,4,6,2,7,9,6]));
