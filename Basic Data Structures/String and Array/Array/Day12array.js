// Day 12
// Problem Statement : Given an Snapshot Array that supports the following interface:

// SnapshotArray(int length) initializes an array-like data structure with the given length. Initially, each element equals 0.
// void set(index, val) sets the element at the given index to be equal to val.
// int snap() takes a snapshot of the array and returns the snap_id: the total number of times we called snap() minus 1.
// int get(index, snap_id) returns the value at the given index, at the time we took the snapshot with the given snap_id
// Example
// Input: ["SnapshotArray","set","snap","set","get"]
// [[3],[0,5],[],[0,6],[0,0]]
// Output: [null,null,0,null,5]
// Explanation: SnapshotArray snapshotArr = new SnapshotArray(3); // set the length to be 3
// snapshotArr.set(0,5);  // Set array[0] = 5
// snapshotArr.snap();  // Take a snapshot, return snap_id = 0
// snapshotArr.set(0,6);
// snapshotArr.get(0,0);  // Get the value at index 0, at snap_id = 0, return 5
// Core Problem what we have to do = We need to implement a Snapshot Array that supports setting values, taking snapshots, and retrieving values based on snapshots.

// Most Effective Method
var SnapshotArray = function(length) {
    this.snapId = 0;

    this.history =
        Array(length)
            .fill(0)
            .map(() => [[0, 0]]);
};

SnapshotArray.prototype.set = function(index, val) {

    let arr = this.history[index];

    if (arr[arr.length - 1][0] === this.snapId) {
        arr[arr.length - 1][1] = val;
    } else {
        arr.push([this.snapId, val]);
    }
};

SnapshotArray.prototype.snap = function() {
    return this.snapId++;
};

SnapshotArray.prototype.get = function(index, snap_id) {
    let arr = this.history[index];
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid][0] <= snap_id) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return arr[right][1];
};

const snapshotArr = new SnapshotArray(3);
snapshotArr.set(0, 5);
console.log(snapshotArr.snap());
snapshotArr.set(0, 6);
console.log(snapshotArr.get(0, 0));