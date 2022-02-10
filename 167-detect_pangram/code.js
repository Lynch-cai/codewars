// Detect Pangram
const isPangram = sen => {
  let arr = [...Array(26).fill(0)]
  sen.split('').map(x => {
    const y = x.toLowerCase().charCodeAt(0)
    y >= 97 && y <= 123 ? arr[y-97] = 1 : ''
  })
  return arr.reduce((x,y) => x+y) === 26 ? true : false
}



// -- Instruction
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test1", () => {
//     var string = "The quick brown fox jumps over the lazy dog."
//     assert.strictEqual(isPangram(string), true)
//   })
//   it("test2", () => {
//     var string = "This is not a pangram."
//     assert.strictEqual(isPangram(string), false)
//   });
// });
