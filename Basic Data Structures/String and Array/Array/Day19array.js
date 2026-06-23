// Day 19
// Problem Statement : You are playing a game involving a circular array of non-zero integers nums. Each nums[i] denotes the number of indices forward/backward you must move if you are located at index i:
// Example
// Input : nums = [2,-1,1,2,2]
// Output : true
// Core Problem what we have to do = Detect a cycle in a directed graph where each node has exactly one outgoing edge

// Most Effective Solution
function circularArrayLoop(nums) {
    const n = nums.length;
    function next(i) {
        return ((i + nums[i]) % n + n) % n;
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue;
        let slow = i;
        let fast = i;
        const direction = nums[i] > 0;
        while (true) {
            let nextSlow = next(slow);
            if (
                nums[nextSlow] > 0 !== direction ||
                nums[slow] > 0 !== direction
            ) {
                break;
            }
            let nextFast = next(fast);
            if (
                nums[nextFast] > 0 !== direction ||
                nums[fast] > 0 !== direction
            ) {
                break;
            }
            nextFast = next(nextFast);
            if (
                nums[nextFast] > 0 !== direction
            ) {
                break;
            }
            slow = nextSlow;
            fast = nextFast;
            if (slow === fast) {
                if (slow === next(slow)) {
                    break;
                }
                return true;
            }
        }
        let curr = i;
        while (
            nums[curr] !== 0 &&
            (nums[curr] > 0) === direction
        ) {
            let nxt = next(curr);
            nums[curr] = 0;
            curr = nxt;
        }
    }
    return false;
}