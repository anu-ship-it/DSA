// Day 4
// Probelm Statement = Given a string where we have to reverse first k characters for every 2k block

// Example
// Input: s = "abcdefg", k =2
// Output: "badcdfeg"
// Exaplanation: What ever we have k given, assuming that we have to swap the next postion element with that without distrubing other elements.
// Core Probelm what we have to do = Just swap those 2 element number which k is given to us in the string.

// For understanding the logic of shifting a string without using build -in function
function reverseStr(s, k) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr.join('');
}
console.log(reverseStr("abcd",2));
