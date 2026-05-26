// Day 3
// Problem Statement = Given a string where we have to reverse vowels

// Example
// Input: s = "IceCreAm"
// Output: "AceCreIm"
// Explanation: The vowels in the string "IceCreAm" are 'I', 'e', 'e', and 'A'. When we reverse the order of these vowels, we get 'A', 'e', 'e', and 'I'. Therefore, the resulting string after reversing the vowels is "AceCreIm".
// Core Problem what we have to do = We need to reverse the order of the vowels in the given string while keeping the positions of the consonants unchanged.

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
