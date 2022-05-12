// Is this a triangle?
const isTriangle = (a,b,c) =>
{
  const t = [a,b,c].sort((a,b)=>a-b)
  return t[0]+t[1] > t[2]
}


// -- Instruction
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).


// -- Sample Tests:
// const { assert } = require("chai")

// describe("Public tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(isTriangle(1,2,2), true);
//     assert.strictEqual(isTriangle(7,2,2), false);
//   });
// })