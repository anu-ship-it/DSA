// Day 9
// Problem Statement = Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:
// 1. A method value() that returns the original array of integers.
// 2. An overridden toString() method that returns a string representation of the array in the format "[x1, x2, x3, ...]", where x1, x2, x3, etc. are the elements of the array.
// Example
// Input: arr = [1, 2, 3]
// Output: "[1, 2, 3]"
// Explanation: The toString() method should return the string representation of the array in the specified format. 
// Core Problem what we have to do = We need to create a class that can store an array of integers and provide a method to return the original array, as well as a method to return a string representation of the array in a specific format.

// Most Effective Method
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    valueOf() {
        let sum = 0;
        for (let num of this.nums) {
            sum += num;
        }
        return sum;
    }
    toString() {
        return `[${this.nums.join(',')}]`;
    }
}
const wrapper = new ArrayWrapper([1, 2, 3]);
console.log(wrapper.value());
console.log(wrapper.toString());
