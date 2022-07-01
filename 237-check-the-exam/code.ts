// Check the exam
export function checkExam(arr1: string[], arr2: string[]): number {
  return Math.max(0, arr1.map((x, key) => x === arr2[key] ? 4 : arr2[key] === "" ? 0 : -1).reduce((pv, cv) => pv + cv, 0))
}



// -- Instruction
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0



// -- Sample Tests:
// See https://www.chaijs.com for how to use Chai.
// import { assert } from "chai";
// import { checkExam } from "./solution";

// describe("Basic tests", () => {
//   it("Should pass basic tests", () => {
//     assert.equal(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
//     assert.equal(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
//     assert.equal(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
//     assert.equal(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);
//   });
// });