// Day 3
// Problem Statement = Given a string where we have to reverse vowels

// Example
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation:
// Core Problem what we have to do = 

// For understanding the logic of reversing the vowels
function reverseVowels(s) {
    let vowels = "aeiouAEIOU";
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        while (
            left < right &&
            !vowels.includes(arr[left])
        ) {
            left++;
        }
        while (
            left < right &&
            !vowels.includes(arr[right])
        ) {
            right--;
        }
        // swap vowels
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr.join('');
}
