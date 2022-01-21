// Alternate case
function alternateCase(str) {
  str = str.split("");
  str.map((s, i) => {
    str[i] = s == s.toUpperCase() ? s.toLowerCase() : s.toUpperCase();
  });
  return str.join("");
}

// -- Instruction
// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

// -- Sample Tests:
// const _ = require('lodash')
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;
// describe("Alternate case", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(alternateCase("abc"), "ABC");
//     assert.strictEqual(alternateCase("ABC"), "abc");
//     assert.strictEqual(alternateCase("Hello World"), "hELLO wORLD");
//   })
// });
