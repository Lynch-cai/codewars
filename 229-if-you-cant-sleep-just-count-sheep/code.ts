// If you can't sleep, just count sheep!!
export function countSheep(n: number): string {
  return [...Array(n+1).keys()].slice(1).map(x => x+" sheep...").join('')
}



// -- Instruction
// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.



// -- Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Sample Test Cases", function(){
//   it("Should return a string", function() {
//     assert.equal(solution.countSheep(0), '');
//     assert.equal(solution.countSheep(1), '1 sheep...');
//     assert.equal(solution.countSheep(2), '1 sheep...2 sheep...');
//     assert.equal(solution.countSheep(3), '1 sheep...2 sheep...3 sheep...');
//   });
// });