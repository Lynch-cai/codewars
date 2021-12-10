// MergeSort "merge" function
function mergesorted(a, b) {
    let res = []
    a = a.concat(b)
    const len = a.length
    while (res.length < len){
        let min = Math.min(...a)
        for (let i = 0; i < a.length; i++){
            if (min >= a[i]){
                res.push(a[i])
                a.splice(i, 1)
            }
        }
    }
    return res
}



// -- Instruction
// In this excercise, we will implement the "merge" function from MergeSort.

// MergeSort is often taught in Computer Science as the canonical example of the "Divide and Conquer" algorithm. The strategy of MergeSort is both simple and profound, leveraging two simple-to-prove mathematical facts (1. That every list of 1 element is "sorted" ... and 2. It is much easier to combine two already-sorted lists into 1 sorted list than it is to sort a big list all at once) to yield an algorithm with a worst-case complexity of O(n log n).

// Basically, MergeSort works like this:

// If we get a list of size 1, then it's already sorted: we're done. Just return that value.
// Otherwise; break the list you have to sort in half: 2a. MergeSort the first half. 2b. MergeSort the second half. 2c. "Merge" the two sorted lists for 2a and 2b together. Voila: sorted.
// 2c is where the MergeSort "merge" function comes in. It takes two already-sorted lists (arrays, in this example) and returns one large sorted list.

// The name of the function in this example is "mergesorted". It should return a big sorted array from two smaller sorted arrays: e.g.

// mergesorted([1,2],[3,4]) //should: [1,2,3,4]

// mergesorted([1,2],[3]) //should: [1,2,3]

// mergesorted([1],[2, 3]) //should: [1,2,3]



// -- Sample Tests:
// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// // Uncomment the following line to disable truncating failure messages for deep equals, do:
// // chai.config.truncateThreshold = 0;
// // Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// // Uncomment the following to use the old assertions:
// // const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//   it("should test for something", function() {
//     Test.assertEquals(1 + 1, 2);
//     assert.strictEqual(1 + 1, 2);
//   });
// });


