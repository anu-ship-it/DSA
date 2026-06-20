// Day 17
// Problem Statement : Keep extending the current segment until it becomes a NEW segment that has never appeared before.
// Example : s = "abbccccd"
// Output : ["a","b","bc","c","cc","d"]
// Core Problem what we have to do = How do we efficiently check whether the current segment has already appeared before?

// Most Effective Method
function partitionString(s){
    const seen = new Set();
    const result = [];
    let current = "";
    for (let ch of s){
        current += ch;
        if(!seen.has(current)){
            result.push(current);
            seen.add(current);
            current="";
        }
    }
    return result;
}
console.log(partitionString("abbccccd"));
