// What is between?
export function between(a: number, b: number): number[] {
  return [...Array((b-a)+1).keys()].map(x=>x+a)
}



// -- Instruction
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]



// -- Sample Tests:
// import { assert } from "chai";
// import { between } from "./solution";

// describe("Basic tests", () => {
//   it("Basic tests should work", () => {
//     assert.deepEqual(between(1, 4), [1, 2, 3, 4]);
//     assert.deepEqual(between(-2, 2), [-2, -1, 0, 1, 2]);
//   });
// });