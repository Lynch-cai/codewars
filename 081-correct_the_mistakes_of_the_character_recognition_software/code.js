// Correct the mistakes of the character recognition software
function correct(str){
  const nonDigitised = [['S', '5'], ['O', '0'], ['I', '1']]
        for (let i = 0; i < str.length; i++){
        for (let j = 0; j < nonDigitised.length; j++){
            if (str[i] == nonDigitised[j][1]){
                str = str.substring(0, i) + nonDigitised[j][0] + str.substring(i+1, str.length)
            }
        }
  }
  return str
}



// -- Instruction
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.



// -- Sample Tests:
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(correct("L0ND0N"),"LONDON");
//     assert.strictEqual(correct("DUBL1N"),"DUBLIN");
//     assert.strictEqual(correct("51NGAP0RE"),"SINGAPORE");
//     assert.strictEqual(correct("BUDAPE5T"),"BUDAPEST");
//     assert.strictEqual(correct("PAR15"),"PARIS");
//   });
// });