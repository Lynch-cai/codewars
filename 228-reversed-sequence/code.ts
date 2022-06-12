// Reversed sequence
export const reverseSeq = (n: number): number[] => {
  return [...Array(n+1).keys()].slice(1).reverse()
}



// -- Instruction
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]



// -- Sample Tests:
// import {reverseSeq} from "./solution";
// import {assert} from "chai";

// describe("reverseSeq", function() {
//   it("Sample Test", function() {
//     assert.deepEqual(reverseSeq(5), [5, 4, 3, 2, 1]);
//   });
// });