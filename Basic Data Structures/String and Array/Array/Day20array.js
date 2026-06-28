// Day 20
// Problem Statement : Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.
// Example
// Input : [[[1, 2, 3]], [], [], []]
// Output : [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
// Core Problem what we have to do = How do we generate a random permutation such that every possible arrangement is equally likely?

// Most Effective Method
// @param {number[]} nums
var Solution = function(nums) {
    this.original = [...nums];
};

// @return {number[]}
 
Solution.prototype.reset = function() {
    return [...this.original];
};
// @return {number[]}

Solution.prototype.shuffle = function() {
    let shuffled = [...this.original];
    for (let i = 0; i < shuffled.length; i++) {
        let j = i + Math.floor(Math.random() * (shuffled.length - i));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
