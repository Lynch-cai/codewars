// Invert values
const invert = arr => arr.map(x => x*-1)



// -- Instruction
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Invert array values",() => {
//   it("Basic Tests", () => {
//     assert.deepEqual(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
//     assert.deepEqual(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
//     assert.deepEqual(invert([]), []);
//     assert.deepEqual(invert([0]), [-0]);
//   });
// });