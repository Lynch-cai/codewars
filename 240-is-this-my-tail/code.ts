// Is this my tail?
export function correctTail(body: string, tail: string): boolean{
  return body[body.length-1] === tail
}



// -- Instruction
// Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

// If the tail is right return true, else return false.

// The arguments will always be non empty strings, and normal letters.



// -- Sample Tests:
// import { assert } from "chai";
// import { correctTail } from "./solution";

// describe("Is this my tail?", () => {
//   it("Fixed tests", () => {
//     assert.strictEqual(correctTail("Fox", "x"), true);
//     assert.strictEqual(correctTail("Rhino", "o"), true);
//     assert.strictEqual(correctTail("Meerkat", "t"), true);
//     assert.strictEqual(correctTail("Emu", "t"), false);
//     assert.strictEqual(correctTail("Badger", "s"), false);
//     assert.strictEqual(correctTail("Giraffe", "d"), false);
//   });
// });
