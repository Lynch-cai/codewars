// Fake Binary
export const fakeBin = (x:string):string => {
  return x.replace(/[1-4]/g,'0').replace(/[5-9]/g,'1')
};



// -- Instruction
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string



// -- Sample Tests:
// import solution = require('./solution');
// import {assert} from "chai";

// describe("Example tests", function() {
//   it("should work for simple cases", function() {
//     assert.equal(solution.fakeBin('45385593107843568'), '01011110001100111');
//     assert.equal(solution.fakeBin('509321967506747'), '101000111101101'); 
//     assert.equal(solution.fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 
//   });
// });